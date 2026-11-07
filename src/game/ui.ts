// HOLLOW VALE — UI: menus, HUD, touch controls, note reader, overlays (self-contained DOM)
import { iconSvg, loadTouchLayout, saveTouchLayout, clearTouchLayout } from './core';
import type { Input, Settings, TouchLayout } from './core';
import type { Player, WeaponId } from './player';
import type { Quests, NoteDef } from './quests';

export interface UICallbacks {
  onStartSP: (continueSave: boolean) => void;
  onCreateRoom: (name: string, mode: 'coop' | 'versus') => void;
  onJoinRoom: (name: string, code: string) => void;
  onStartGame: () => void;
  onLeaveRoom: () => void;
  onRespawn: () => void;
  onQuitToMenu: () => void;
  onResume: () => void;
  onSettingsChanged: (s: Settings) => void;
  onToggleOverlay?: (name: 'map' | 'quest' | 'radio') => void;
  onCycleWeapon?: () => void;
  onRadioTune?: (freq: number) => void;
  onTrade?: (index: number) => void;
}

export interface QuestLogEntry { id: string; title: string; desc: string; done: boolean; active: boolean; side?: boolean }
export interface TradeEntry { label: string; afford: boolean }
export interface MapTarget { x: number; z: number; label: string }
export interface MapData { px: number; pz: number; yaw: number; target: MapTarget | null; visited: Set<string> | null }
export interface RadioData { freq: number; level: number; message: string | null }

const CSS = `
#hv-root { position: fixed; inset: 0; z-index: 50; font-family: 'Courier New', monospace; color: #cfc9bd; overflow: hidden; user-select: none; -webkit-user-select: none; touch-action: none; }
#hv-root * { box-sizing: border-box; }
#hv-root canvas { position: absolute; inset: 0; width: 100% !important; height: 100% !important; }
.hv-screen { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; background: radial-gradient(ellipse at 50% 40%, rgba(10,8,6,0.88), rgba(2,2,3,0.97)); z-index: 20; }
.hv-hidden { display: none !important; }
.hv-title { font-family: Georgia, 'Times New Roman', serif; font-size: clamp(42px, 9vw, 96px); letter-spacing: 0.18em; color: #b8b2a4; text-shadow: 0 0 24px rgba(160,20,20,0.35), 0 2px 0 #000; margin: 0; }
.hv-title .red { color: #8f1d1d; }
.hv-sub { letter-spacing: 0.35em; font-size: clamp(10px, 1.6vw, 14px); color: #6f695e; margin-top: 6px; text-transform: uppercase; }
.hv-btn { font-family: inherit; display: block; width: min(320px, 78vw); margin: 7px 0; padding: 13px 18px; background: rgba(18,14,12,0.82); border: 1px solid #3a332c; color: #c8c1b2; font-size: 15px; letter-spacing: 0.14em; cursor: pointer; text-transform: uppercase; transition: all 0.15s; text-align: center; }
.hv-btn:hover { border-color: #8f1d1d; color: #e8e0cf; background: rgba(40,16,14,0.6); box-shadow: 0 0 18px rgba(143,29,29,0.25); }
.hv-btn.primary { border-color: #5a1515; background: rgba(50,14,12,0.55); }
.hv-btn:disabled { opacity: 0.4; cursor: default; }
.hv-input { font-family: inherit; display: block; width: min(320px, 78vw); margin: 6px 0; padding: 12px 14px; background: rgba(8,7,6,0.9); border: 1px solid #3a332c; color: #d8d0be; font-size: 15px; letter-spacing: 0.08em; outline: none; }
.hv-input:focus { border-color: #6a5a3a; }
.hv-panel { background: rgba(10,9,8,0.92); border: 1px solid #2e2924; padding: 22px 26px; width: min(560px, 92vw); max-height: 82vh; overflow-y: auto; }
.hv-h2 { font-family: Georgia, serif; letter-spacing: 0.2em; font-size: 20px; color: #a89f8c; margin: 0 0 14px; text-transform: uppercase; border-bottom: 1px solid #2e2924; padding-bottom: 10px; }
.hv-row { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 10px 0; font-size: 13px; }
.hv-row label { color: #8f887a; letter-spacing: 0.08em; }
.hv-select, .hv-range { accent-color: #8f1d1d; }
.hv-select { font-family: inherit; background: #14100d; color: #cfc7b5; border: 1px solid #3a332c; padding: 7px 10px; }
.hv-note-text { white-space: pre-wrap; font-family: Georgia, serif; font-size: 16px; line-height: 1.75; color: #3a3226; background: #c9bfa4; padding: 26px 28px; width: min(560px, 92vw); max-height: 70vh; overflow-y: auto; box-shadow: 0 12px 60px rgba(0,0,0,0.8); transform: rotate(-0.4deg); }
.hv-note-title { font-family: Georgia, serif; font-size: 22px; margin-bottom: 14px; border-bottom: 1px solid #8a7f66; padding-bottom: 8px; }
.hv-kbd { display:inline-block; min-width: 26px; text-align:center; border: 1px solid #4a443a; border-radius: 3px; padding: 2px 7px; margin-right: 8px; color: #d8cfb8; background: #17130f; font-size: 12px; }
/* HUD */
#hv-hud { position: absolute; inset: 0; pointer-events: none; z-index: 10; }
#hv-objective { position: absolute; top: 14px; left: 16px; max-width: 340px; }
#hv-objective .main { font-size: 14px; color: #d8cfae; text-shadow: 0 1px 3px #000; letter-spacing: 0.06em; }
#hv-objective .main::before { content: '◆ '; color: #8f1d1d; }
#hv-objective .side { font-size: 11px; color: #7d766a; margin-top: 4px; text-shadow: 0 1px 3px #000; }
#hv-objective .side::before { content: '· '; }
#hv-vitals { position: absolute; left: 16px; bottom: 16px; width: 190px; }
.hv-bar { height: 8px; background: rgba(10,8,8,0.7); border: 1px solid #2e2822; margin-top: 6px; position: relative; }
.hv-bar > i { display: block; height: 100%; transition: width 0.2s; }
.hv-bar.hp > i { background: linear-gradient(90deg, #6a1414, #a82a2a); }
.hv-bar.st > i { background: #5a6a3a; }
.hv-bar.fe > i { background: #4a3a6a; }
.hv-bar.ba > i { background: #8a7a3a; }
.hv-vlabel { font-size: 9px; letter-spacing: 0.2em; color: #6f695e; margin-top: 7px; }
#hv-status { position: absolute; left: 16px; bottom: 150px; display: flex; flex-wrap: wrap; max-width: 46vw; }
.hv-st { display: inline-flex; gap: 4px; align-items: center; background: rgba(10,8,8,0.7); border: 1px solid #2e2822; padding: 3px 6px; margin-right: 5px; font-size: 10px; }
.hv-st svg { pointer-events: none; }
#hv-hotbar { position: absolute; bottom: 14px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px; }
.hv-slot { width: 52px; height: 52px; border: 1px solid #2e2822; background: rgba(10,8,8,0.6); display: flex; align-items: center; justify-content: center; font-size: 9px; color: #8f887a; position: relative; letter-spacing: 0.05em; text-align: center; }
.hv-slot.active { border-color: #8f1d1d; color: #d8cfae; box-shadow: 0 0 12px rgba(143,29,29,0.35); }
.hv-slot .cnt { position: absolute; bottom: 2px; right: 4px; font-size: 10px; color: #c8b47a; }
#hv-crosshair { position: absolute; left: 50%; top: 50%; width: 4px; height: 4px; margin: -2px; background: rgba(216,207,174,0.85); border-radius: 50%; box-shadow: 0 0 4px #000; }
#hv-prompt { position: absolute; left: 50%; bottom: 24%; transform: translateX(-50%); font-size: 14px; letter-spacing: 0.1em; color: #e0d7bf; text-shadow: 0 1px 4px #000; background: rgba(8,6,5,0.55); padding: 8px 16px; border: 1px solid rgba(90,80,60,0.4); }
#hv-subtitle { position: absolute; left: 50%; bottom: 13%; transform: translateX(-50%); width: min(680px, 86vw); text-align: center; font-family: Georgia, serif; font-size: clamp(14px, 2.2vw, 19px); color: #d8d0bc; text-shadow: 0 2px 6px #000, 0 0 20px rgba(0,0,0,0.9); font-style: italic; }
#hv-messages { position: absolute; left: 50%; top: 18%; transform: translateX(-50%); text-align: center; width: 80vw; }
.hv-msg { font-size: 15px; letter-spacing: 0.12em; color: #cfc4a4; text-shadow: 0 1px 4px #000; margin: 4px 0; animation: hvmsg 3.4s forwards; }
.hv-msg.big { font-family: Georgia, serif; font-size: 24px; color: #b8a888; letter-spacing: 0.2em; }
@keyframes hvmsg { 0% {opacity: 0; transform: translateY(8px);} 10% {opacity: 1; transform: none;} 78% {opacity: 1;} 100% {opacity: 0;} }
#hv-vignette { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse at center, transparent 42%, rgba(60,0,0,0.55) 100%); opacity: 0; transition: opacity 0.4s; }
#hv-damage { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(ellipse at center, transparent 30%, rgba(150,10,10,0.5) 100%); opacity: 0; }
#hv-blood { position: absolute; inset: 0; pointer-events: none; overflow: hidden; }
.hv-splat { position: absolute; border-radius: 50%; pointer-events: none; background: radial-gradient(circle, rgba(120,10,10,0.55), transparent 70%); }
#hv-teammates { position: absolute; top: 14px; right: 16px; text-align: right; }
.hv-mate { font-size: 11px; color: #9a9284; margin: 3px 0; text-shadow: 0 1px 3px #000; }
.hv-mate .mbar { display: inline-block; width: 60px; height: 5px; background: #221e1a; margin-left: 8px; vertical-align: middle; }
.hv-mate .mbar i { display: block; height: 100%; background: #7a4a2a; }
#hv-timer { position: absolute; top: 12px; left: 50%; transform: translateX(-50%); font-size: 20px; letter-spacing: 0.2em; color: #b8a888; text-shadow: 0 1px 4px #000; }
#hv-role { position: absolute; top: 44px; left: 50%; transform: translateX(-50%); font-size: 11px; letter-spacing: 0.3em; color: #7a6f5c; text-transform: uppercase; }
#hv-compass { position: absolute; top: 66px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 8px; }
#hv-compass .arrow { display: inline-block; width: 26px; height: 26px; line-height: 24px; text-align: center; border: 1px solid #3a332c; border-radius: 50%; background: rgba(10,8,8,0.6); color: #d8cfae; font-size: 15px; transition: transform 0.08s linear; }
#hv-compass .clabel { font-size: 11px; letter-spacing: 0.14em; color: #b8a888; text-shadow: 0 1px 4px #000; text-transform: uppercase; }
#hv-camframe { position: absolute; inset: 0; pointer-events: none; box-shadow: inset 0 0 140px rgba(0,0,0,0.8); }
#hv-camframe .cbr { position: absolute; width: 34px; height: 34px; border: 2px solid rgba(240,238,228,0.9); }
#hv-camframe .c1 { top: 18px; left: 18px; border-right: none; border-bottom: none; }
#hv-camframe .c2 { top: 18px; right: 18px; border-left: none; border-bottom: none; }
#hv-camframe .c3 { bottom: 18px; left: 18px; border-right: none; border-top: none; }
#hv-camframe .c4 { bottom: 18px; right: 18px; border-left: none; border-top: none; }
#hv-camframe .clabel { position: absolute; bottom: 12%; left: 50%; transform: translateX(-50%); font-size: 11px; letter-spacing: 0.28em; color: rgba(240,238,228,0.9); text-shadow: 0 1px 4px #000; white-space: nowrap; }
/* touch */
#hv-touch { position: absolute; inset: 0; z-index: 12; pointer-events: none; }
#hv-touch .zone { position: absolute; pointer-events: auto; }
#hv-stick-base { position: absolute; width: 120px; height: 120px; border-radius: 50%; border: 1.5px solid rgba(160,150,130,0.25); background: rgba(20,16,14,0.25); }
#hv-stick-nub { position: absolute; width: 52px; height: 52px; border-radius: 50%; background: rgba(180,168,145,0.3); border: 1px solid rgba(200,190,165,0.4); }
.hv-tbtn { position: absolute; width: 62px; height: 62px; border-radius: 50%; border: 1.5px solid rgba(160,150,130,0.35); background: rgba(20,16,14,0.4); color: #cfc4a8; font-family: inherit; font-size: 10px; letter-spacing: 0.06em; display: flex; flex-direction: column; align-items: center; justify-content: center; pointer-events: auto; text-transform: uppercase; }
.hv-tbtn:active, .hv-tbtn.on { background: rgba(143,29,29,0.45); border-color: rgba(220,120,100,0.6); }
.hv-tbtn.small { width: 48px; height: 48px; font-size: 9px; }
.hv-tico { display: block; line-height: 0; }
.hv-tico svg { pointer-events: none; }
.hv-tbtn.hv-editing { border-color: rgba(216,178,90,0.7); cursor: move; }
.hv-tbtn.hv-sel { outline: 2px solid #d8b25a; outline-offset: 2px; z-index: 6; }
#hv-editbar { position: absolute; top: 8px; left: 50%; transform: translateX(-50%); z-index: 30; display: flex; align-items: center; gap: 10px; pointer-events: auto; background: rgba(12,10,8,0.94); border: 1px solid #6a5a2a; padding: 8px 12px; font-size: 11px; letter-spacing: 0.08em; color: #d8c9a0; max-width: 94vw; flex-wrap: wrap; justify-content: center; }
#hv-editbar .hv-ebtn { width: auto; margin: 0; padding: 6px 12px; font-size: 10px; display: inline-block; }
#hv-edit-size { width: 110px; accent-color: #d8b25a; }
#hv-lookzone { position: absolute; right: 0; top: 0; width: 55%; height: 100%; pointer-events: auto; }
/* journal / quest log */
.hv-quest-row { padding: 9px 6px; border-bottom: 1px dashed #26221c; }
.hv-quest-row .qt { font-size: 14px; letter-spacing: 0.04em; }
.hv-quest-row .qd { font-size: 12px; color: #7d766a; margin-top: 3px; }
/* map */
#hv-root #hv-map-canvas { position: relative; inset: auto; width: min(460px, 86vw) !important; height: min(460px, 86vw) !important; border: 1px solid #2e2924; background: #1a1712; }
/* radio */
.hv-radio-readout { font-size: 36px; letter-spacing: 0.15em; color: #9ab05a; text-shadow: 0 0 18px rgba(120,180,60,0.35); }
#hv-radio-bars { display: flex; gap: 5px; justify-content: center; margin: 12px 0 4px; }
.hv-rbar { width: 20px; height: 24px; background: #1c1812; border: 1px solid #2e2822; }
.hv-rbar.lit { background: #7a9a3a; box-shadow: 0 0 8px rgba(130,170,60,0.5); }
#hv-radio-msg { font-family: 'Courier New', monospace; font-size: 13px; color: #7aa04a; min-height: 54px; margin-top: 12px; white-space: pre-wrap; text-align: left; background: rgba(14,18,10,0.5); border: 1px solid #242a1a; padding: 10px 12px; }
/* trade */
.hv-trade-row { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 9px 4px; border-bottom: 1px dashed #26221c; font-size: 13px; color: #a89f8c; }
.hv-tbuy { width: auto; margin: 0; padding: 6px 16px; font-size: 11px; display: inline-block; }
/* lobby */
#hv-lobby-code { font-family: Georgia, serif; font-size: 54px; letter-spacing: 0.3em; color: #d8c9a0; text-shadow: 0 0 30px rgba(160,130,60,0.4); margin: 8px 0; }
.hv-players { margin: 12px 0; width: 100%; }
.hv-player-row { display: flex; justify-content: space-between; padding: 8px 4px; border-bottom: 1px dashed #2a251f; font-size: 13px; color: #a89f8c; }
.hv-mode-tag { font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #7a6a4a; border: 1px solid #3a3020; padding: 3px 10px; }
.hv-death { background: radial-gradient(ellipse at center, rgba(60,4,4,0.55), rgba(5,0,0,0.97)) !important; }
.hv-death .hv-title { color: #7a1212; font-size: clamp(50px, 10vw, 110px); }
.hv-fade { position: absolute; inset: 0; background: #000; z-index: 40; pointer-events: none; transition: opacity 0.6s; opacity: 0; }
.hv-halluc { position: absolute; inset: 0; pointer-events: none; z-index: 9; }
.hv-scan { position:absolute; inset:0; pointer-events:none; opacity:0.06; background: repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,0,0,0.9) 2px 3px); }
.hv-loadingbar { width: min(400px, 70vw); height: 3px; background: #1a1712; margin-top: 26px; }
.hv-loadingbar i { display: block; height: 100%; background: #8f1d1d; width: 0%; transition: width 0.3s; }
.hv-tip { margin-top: 14px; font-size: 11px; color: #5f594e; letter-spacing: 0.12em; }
::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-thumb { background: #2e2822; } ::-webkit-scrollbar-track { background: transparent; }
`;

/* map static feature data (world coords) */
const MAP_ROADS: number[][] = [
  [-58, 14, 40, 14],
  [0, -25, 0, 55],
  [14, 14, 28, 14],
  [28, 14, 28, -3],
  [0, 14, 22, 14],
];
const MAP_BLD: { label: string; x: number; z: number; w: number; h: number }[] = [
  { label: 'CHURCH', x: 0, z: -30, w: 15, h: 10 },
  { label: 'BARN', x: 28, z: -8, w: 13, h: 9 },
  { label: 'MILL', x: -20, z: 12, w: 10, h: 8 },
  { label: 'FARM', x: 22, z: 18, w: 12, h: 9 },
  { label: 'ANNEX', x: 18, z: -28, w: 8, h: 7 },
  { label: 'CLINIC', x: -28, z: 10, w: 10, h: 8 },
  { label: 'WORK', x: -5, z: 30, w: 7, h: 6 },
  { label: 'CABIN', x: 45, z: -30, w: 7, h: 6 },
];

export class UI {
  root: HTMLElement;
  private cb: UICallbacks;
  private hud: HTMLElement;
  private screens: Record<string, HTMLElement> = {};
  private objMain: HTMLElement;
  private objSides: HTMLElement;
  private bars: Record<string, HTMLElement> = {};
  private barLabels: Record<string, HTMLElement> = {};
  private hotbarEl: HTMLElement;
  private promptEl: HTMLElement;
  private subtitleEl: HTMLElement;
  private messagesEl: HTMLElement;
  private vignette: HTMLElement;
  private damageEl: HTMLElement;
  private teammatesEl: HTMLElement;
  private timerEl: HTMLElement;
  private roleEl: HTMLElement;
  private touchWrap: HTMLElement;
  private stickBase: HTMLElement;
  private stickNub: HTMLElement;
  private lookZoneEl!: HTMLElement;
  private crosshair: HTMLElement;
  private fadeEl: HTMLElement;
  private subtitleTimer = 0;
  private touchEnabled = false;
  private sprintToggle = false;
  onSprintToggle: ((v: boolean) => void) | null = null;
  private input: Input;
  private lobbyListEl: HTMLElement | null = null;
  private lobbyStartBtn: HTMLButtonElement | null = null;
  private lobbyModeEl: HTMLElement | null = null;
  private noteCloseCb: (() => void) | null = null;
  private crouchToggle = false;
  private _settings: Settings;
  /* overlays */
  private journalCloseCb: (() => void) | null = null;
  private mapCloseCb: (() => void) | null = null;
  private radioCloseCb: (() => void) | null = null;
  private tradeBuyCb: ((i: number) => void) | null = null;
  private tradeCloseCb: (() => void) | null = null;
  private questListEl: HTMLElement | null = null;
  private tradeListEl: HTMLElement | null = null;
  /* touch layout + edit mode */
  private layout: TouchLayout = loadTouchLayout() ?? {};
  private touchBtns: Record<string, HTMLButtonElement> = {};
  private touchDefaults: Record<string, string> = {};
  private editMode = false;
  private editBar: HTMLElement | null = null;
  private editSlider: HTMLInputElement | null = null;
  private selectedBtn: HTMLButtonElement | null = null;
  /* map */
  private mapCanvas: HTMLCanvasElement | null = null;
  private mapCtx: CanvasRenderingContext2D | null = null;
  private mapData: MapData | null = null;
  private mapAcc = 0;
  /* compass */
  private compassEl: HTMLElement;
  private compassArrow: HTMLElement;
  private compassLabelEl: HTMLElement;
  private lastBearing = 0;
  private lastLabel = '';
  private compassOn = false;
  /* status row / blood / camera frame */
  private statusEl: HTMLElement;
  private bloodEl: HTMLElement;
  private camframeEl: HTMLElement;
  private camframeLabel: HTMLElement;
  /* radio */
  private radioFreqEl!: HTMLElement;
  private radioMsgEl!: HTMLElement;
  private radioSlider!: HTMLInputElement;
  private radioBarsEl!: HTMLElement;

  constructor(container: HTMLElement, input: Input, settings: Settings, cb: UICallbacks) {
    this.cb = cb;
    this.input = input;
    this._settings = settings;
    const style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    this.root = document.createElement('div');
    this.root.id = 'hv-root';
    container.appendChild(this.root);

    // scanlines + grain flavor
    const scan = document.createElement('div');
    scan.className = 'hv-scan';
    this.root.appendChild(scan);

    /* ---- HUD ---- */
    this.hud = document.createElement('div');
    this.hud.id = 'hv-hud';
    this.hud.classList.add('hv-hidden');
    this.root.appendChild(this.hud);

    const objective = document.createElement('div');
    objective.id = 'hv-objective';
    this.objMain = document.createElement('div');
    this.objMain.className = 'main';
    this.objSides = document.createElement('div');
    this.objSides.className = 'side';
    objective.append(this.objMain, this.objSides);
    this.hud.appendChild(objective);

    this.teammatesEl = document.createElement('div');
    this.teammatesEl.id = 'hv-teammates';
    this.hud.appendChild(this.teammatesEl);

    this.timerEl = document.createElement('div');
    this.timerEl.id = 'hv-timer';
    this.timerEl.classList.add('hv-hidden');
    this.hud.appendChild(this.timerEl);
    this.roleEl = document.createElement('div');
    this.roleEl.id = 'hv-role';
    this.hud.appendChild(this.roleEl);

    const vitals = document.createElement('div');
    vitals.id = 'hv-vitals';
    const mkBar = (key: string, label: string) => {
      const vl = document.createElement('div');
      vl.className = 'hv-vlabel';
      vl.textContent = label;
      this.barLabels[key] = vl;
      const bar = document.createElement('div');
      bar.className = 'hv-bar ' + key;
      const fill = document.createElement('i');
      bar.appendChild(fill);
      this.bars[key] = fill;
      vitals.append(vl, bar);
    };
    mkBar('hp', 'VITALITY');
    mkBar('st', 'STAMINA');
    mkBar('fe', 'DREAD');
    mkBar('ba', 'TORCH');
    this.hud.appendChild(vitals);

    this.statusEl = document.createElement('div');
    this.statusEl.id = 'hv-status';
    this.statusEl.classList.add('hv-hidden');
    this.hud.appendChild(this.statusEl);

    this.hotbarEl = document.createElement('div');
    this.hotbarEl.id = 'hv-hotbar';
    this.hud.appendChild(this.hotbarEl);

    this.crosshair = document.createElement('div');
    this.crosshair.id = 'hv-crosshair';
    this.hud.appendChild(this.crosshair);

    this.promptEl = document.createElement('div');
    this.promptEl.id = 'hv-prompt';
    this.promptEl.classList.add('hv-hidden');
    this.hud.appendChild(this.promptEl);

    this.subtitleEl = document.createElement('div');
    this.subtitleEl.id = 'hv-subtitle';
    this.hud.appendChild(this.subtitleEl);

    this.messagesEl = document.createElement('div');
    this.messagesEl.id = 'hv-messages';
    this.hud.appendChild(this.messagesEl);

    this.vignette = document.createElement('div');
    this.vignette.id = 'hv-vignette';
    this.hud.appendChild(this.vignette);

    this.damageEl = document.createElement('div');
    this.damageEl.id = 'hv-damage';
    this.hud.appendChild(this.damageEl);

    this.bloodEl = document.createElement('div');
    this.bloodEl.id = 'hv-blood';
    this.hud.appendChild(this.bloodEl);

    this.compassEl = document.createElement('div');
    this.compassEl.id = 'hv-compass';
    this.compassEl.classList.add('hv-hidden');
    this.compassArrow = document.createElement('span');
    this.compassArrow.className = 'arrow';
    this.compassArrow.textContent = '↑';
    this.compassLabelEl = document.createElement('span');
    this.compassLabelEl.className = 'clabel';
    this.compassEl.append(this.compassArrow, this.compassLabelEl);
    this.hud.appendChild(this.compassEl);

    this.camframeEl = document.createElement('div');
    this.camframeEl.id = 'hv-camframe';
    this.camframeEl.classList.add('hv-hidden');
    for (let i = 1; i <= 4; i++) {
      const c = document.createElement('div');
      c.className = 'cbr c' + i;
      this.camframeEl.appendChild(c);
    }
    this.camframeLabel = document.createElement('div');
    this.camframeLabel.className = 'clabel';
    this.camframeEl.appendChild(this.camframeLabel);
    this.hud.appendChild(this.camframeEl);

    /* ---- touch ---- */
    this.touchWrap = document.createElement('div');
    this.touchWrap.id = 'hv-touch';
    this.root.appendChild(this.touchWrap);
    this.stickBase = document.createElement('div');
    this.stickBase.id = 'hv-stick-base';
    this.stickNub = document.createElement('div');
    this.stickNub.id = 'hv-stick-nub';
    this.stickBase.classList.add('hv-hidden');
    this.stickNub.classList.add('hv-hidden');
    this.touchWrap.append(this.stickBase, this.stickNub);
    this.bindTouch(settings);
    this.buildEditBar();

    this.fadeEl = document.createElement('div');
    this.fadeEl.className = 'hv-fade';
    this.root.appendChild(this.fadeEl);

    /* ---- screens ---- */
    this.buildMainScreen(settings);
    this.buildMPScreen(settings);
    this.buildLobbyScreen();
    this.buildSettingsScreen(settings);
    this.buildHelpScreen();
    this.buildNoteScreen();
    this.buildDeathScreen();
    this.buildWinScreen();
    this.buildPauseScreen();
    this.buildLoadingScreen();
    this.buildQuestLogScreen();
    this.buildMapScreen();
    this.buildRadioScreen();
    this.buildTradeScreen();
  }

  private screen(id: string, inner?: HTMLElement[]): HTMLElement {
    const s = document.createElement('div');
    s.id = 'hv-' + id;
    s.className = 'hv-screen hv-hidden';
    if (inner) inner.forEach(i => s.appendChild(i));
    this.root.appendChild(s);
    this.screens[id] = s;
    return s;
  }
  show(name: string | null) {
    for (const k of Object.keys(this.screens)) this.screens[k].classList.toggle('hv-hidden', k !== name);
    if (name) this.input.exitLock();
  }

  /* ---------- main menu ---------- */
  private buildMainScreen(settings: Settings) {
    const hasSave = !!localStorage.getItem('hv_sp_v1');
    const wrap = document.createElement('div');
    wrap.style.textAlign = 'center';
    const title = document.createElement('h1');
    title.className = 'hv-title';
    title.innerHTML = 'HOLLOW <span class="red">VALE</span>';
    const sub = document.createElement('div');
    sub.className = 'hv-sub';
    sub.textContent = 'they hear everything';
    wrap.append(title, sub);
    const btns = document.createElement('div');
    btns.style.marginTop = '34px';
    const bNew = mkBtn('New Game', () => { this.cb.onStartSP(false); }, true);
    const bCont = mkBtn('Continue', () => { this.cb.onStartSP(true); }, false);
    if (!hasSave) bCont.classList.add('hv-hidden');
    const bMP = mkBtn('Multiplayer', () => { this.show('mp'); });
    const bHelp = mkBtn('How to Play', () => { this.show('help'); });
    const bSet = mkBtn('Settings', () => { this.show('settings'); });
    btns.append(bNew, bCont, bMP, bHelp, bSet);
    wrap.appendChild(btns);
    const ver = document.createElement('div');
    ver.style.cssText = 'position:absolute;bottom:12px;font-size:10px;letter-spacing:0.2em;color:#4a453c;';
    ver.textContent = 'V1.0 — SURVIVE THE SHEPHERD';
    void settings;
    this.screen('menu', [wrap, ver]);
    this.screens['menu'].classList.remove('hv-hidden');
  }

  /* ---------- multiplayer ---------- */
  private buildMPScreen(settings: Settings) {
    const panel = document.createElement('div');
    panel.className = 'hv-panel';
    const h = document.createElement('div');
    h.className = 'hv-h2';
    h.textContent = 'Multiplayer';
    const nameInput = document.createElement('input');
    nameInput.className = 'hv-input';
    nameInput.placeholder = 'Your name';
    nameInput.value = settings.playerName !== 'Survivor' ? settings.playerName : '';
    nameInput.maxLength = 14;
    const bCreate = mkBtn('Create Room', () => {
      const n = nameInput.value.trim() || 'Survivor';
      settings.playerName = n;
      this.cb.onCreateRoom(n, (this.screens['mp'].dataset.mode as 'coop' | 'versus') || 'coop');
    }, true);
    const codeInput = document.createElement('input');
    codeInput.className = 'hv-input';
    codeInput.placeholder = 'Room code (e.g. K7QF)';
    codeInput.maxLength = 6;
    codeInput.style.textTransform = 'uppercase';
    const bJoin = mkBtn('Join Room', () => {
      const n = nameInput.value.trim() || 'Survivor';
      settings.playerName = n;
      this.cb.onJoinRoom(n, codeInput.value.trim().toUpperCase());
    });
    const modeRow = document.createElement('div');
    modeRow.className = 'hv-row';
    const modeLabel = document.createElement('label');
    modeLabel.textContent = 'Room mode (host)';
    const modeSel = document.createElement('select');
    modeSel.className = 'hv-select';
    modeSel.innerHTML = '<option value="coop">Co-op — survive together</option><option value="versus">Shepherd vs Survivors</option>';
    modeSel.onchange = () => { this.screens['mp'].dataset.mode = modeSel.value; };
    modeRow.append(modeLabel, modeSel);
    const status = document.createElement('div');
    status.style.cssText = 'font-size:11px;color:#8f1d1d;margin-top:8px;min-height:16px;letter-spacing:0.06em;';
    status.id = 'hv-mp-status';
    const back = mkBtn('Back', () => { this.show('menu'); this.cb.onLeaveRoom(); });
    panel.append(h, nameInput, modeRow, bCreate, codeInput, bJoin, status, back);
    this.screen('mp', [panel]);
  }

  mpStatus(text: string) {
    const s = document.getElementById('hv-mp-status');
    if (s) s.textContent = text;
  }

  private buildLobbyScreen() {
    const panel = document.createElement('div');
    panel.className = 'hv-panel';
    panel.style.textAlign = 'center';
    const h = document.createElement('div');
    h.className = 'hv-h2';
    h.textContent = 'Room Lobby';
    const mode = document.createElement('div');
    mode.className = 'hv-mode-tag';
    mode.textContent = 'CO-OP';
    mode.style.margin = '0 auto';
    this.lobbyModeEl = mode;
    const code = document.createElement('div');
    code.id = 'hv-lobby-code';
    this.lobbyCodeEl = code;
    const hint = document.createElement('div');
    hint.style.cssText = 'font-size:11px;color:#6f695e;letter-spacing:0.1em;';
    hint.textContent = 'share this code — friends join from Multiplayer';
    const list = document.createElement('div');
    list.className = 'hv-players';
    this.lobbyListEl = list;
    const start = mkBtn('Begin the Night', () => this.cb.onStartGame(), true) as HTMLButtonElement;
    this.lobbyStartBtn = start;
    const leave = mkBtn('Leave', () => { this.cb.onLeaveRoom(); this.show('menu'); });
    panel.append(h, mode, code, hint, list, start, leave);
    this.screen('lobby', [panel]);
  }
  private lobbyCodeEl: HTMLElement | null = null;

  lobbyUpdate(room: { code: string; mode: string; players: { id: string; name: string; isHost: boolean }[]; started: boolean; isHost: boolean }) {
    if (this.lobbyCodeEl) this.lobbyCodeEl.textContent = room.code;
    if (this.lobbyModeEl) this.lobbyModeEl.textContent = room.mode === 'versus' ? 'SHEPHERD VS SURVIVORS' : 'CO-OP';
    if (this.lobbyListEl) {
      this.lobbyListEl.innerHTML = '';
      room.players.forEach(p => {
        const row = document.createElement('div');
        row.className = 'hv-player-row';
        row.innerHTML = `<span>${p.isHost ? '⌂ ' : '· '}${esc(p.name)}</span><span style="color:#5f594e;">${p.isHost ? 'HOST' : 'ready'}</span>`;
        this.lobbyListEl!.appendChild(row);
      });
    }
    if (this.lobbyStartBtn) this.lobbyStartBtn.disabled = !room.isHost || room.players.length < 1;
  }

  /* ---------- settings ---------- */
  private buildSettingsScreen(settings: Settings) {
    const panel = document.createElement('div');
    panel.className = 'hv-panel';
    const h = document.createElement('div');
    h.className = 'hv-h2';
    h.textContent = 'Settings';
    panel.appendChild(h);
    const apply = () => this.cb.onSettingsChanged({ ...settings });
    mkRow(panel, 'Quality', mkSelect(['low', 'medium', 'high'], settings.quality, v => { settings.quality = v as Settings['quality']; apply(); }));
    mkRow(panel, 'Camera', mkSelect(['first', 'third'], settings.camMode, v => { settings.camMode = v as Settings['camMode']; apply(); }));
    mkRow(panel, 'Touch controls', mkSelect(['auto', 'on', 'off'], settings.showTouch, v => { settings.showTouch = v as Settings['showTouch']; this.applyTouchSetting(settings); apply(); }));
    mkRow(panel, 'Sensitivity', mkRange(0.3, 2.5, settings.sensitivity, v => { settings.sensitivity = v; apply(); }));
    mkRow(panel, 'Volume', mkRange(0, 1, settings.volume, v => { settings.volume = v; apply(); }));
    mkRow(panel, 'Invert Y', mkCheck(settings.invertY, v => { settings.invertY = v; apply(); }));
    const srvRow = document.createElement('div');
    srvRow.className = 'hv-row';
    srvRow.style.flexDirection = 'column';
    srvRow.style.alignItems = 'stretch';
    const srvLabel = document.createElement('label');
    srvLabel.textContent = 'Multiplayer server (blank = built-in)';
    srvLabel.style.marginBottom = '6px';
    const srvInput = document.createElement('input');
    srvInput.className = 'hv-input';
    srvInput.placeholder = 'ws://192.168.x.x:8787 or leave empty';
    srvInput.value = settings.serverUrl;
    srvInput.onchange = () => { settings.serverUrl = srvInput.value.trim(); apply(); };
    srvRow.append(srvLabel, srvInput);
    panel.appendChild(srvRow);
    const back = mkBtn('Back', () => this.show(this._returnScreen || 'menu'));
    panel.appendChild(back);
    this.screen('settings', [panel]);
  }
  private _returnScreen: string | null = null;

  private buildHelpScreen() {
    const panel = document.createElement('div');
    panel.className = 'hv-panel';
    const h = document.createElement('div');
    h.className = 'hv-h2';
    h.textContent = 'How to Play';
    panel.appendChild(h);
    const kb = document.createElement('div');
    kb.style.cssText = 'font-size:13px;line-height:2.1;color:#a89f8c;';
    kb.innerHTML = [
      ['W A S D', 'move'], ['MOUSE', 'look'], ['SHIFT', 'sprint (loud!)'],
      ['C', 'crouch (quiet)'], ['E', 'interact / pick up'], ['LMB', 'attack / shoot'],
      ['R', 'reload'], ['F', 'torch'], ['Q', 'throw noise grenade'], ['H', 'heal (bandage / pills)'],
      ['V', 'switch 1st / 3rd person'], ['1 2 3', 'knife / revolver / rifle'], ['ESC', 'pause'],
      ['G', 'throw bottle / brick'], ['M', 'village map'], ['J', 'journal'], ['B', 'hold breath'],
      ['N', 'hand dynamo'], ['U', 'hand radio'], ['4 / 5', 'axe / torch'], ['T', 'place candle'],
      ['X', 'splice cables near water'], ['I', 'antique camera'],
    ].map(r => `<span class="hv-kbd">${r[0]}</span> ${r[1]}`).join('<br>');
    panel.appendChild(kb);
    const tips = document.createElement('div');
    tips.style.cssText = 'margin-top:14px;font-size:12px;color:#7d766a;line-height:1.8;font-style:italic;';
    tips.innerHTML = '• The Shepherd hunts by sound. Sprinting screams through the night.<br>• Your torch betrays you in the dark — but total darkness feeds the Dread.<br>• Gunshots stagger him. The old rifle drops him to his knees.<br>• In Co-op, revive the fallen before the night takes them.<br>• Touch: EDIT button rearranges &amp; resizes buttons (saved).';
    panel.appendChild(tips);
    const back = mkBtn('Back', () => this.show('menu'));
    panel.appendChild(back);
    this.screen('help', [panel]);
  }

  /* ---------- note reader ---------- */
  private buildNoteScreen() {
    const note = document.createElement('div');
    note.className = 'hv-note-text';
    const close = mkBtn('Put away', () => { this.show(null); const cb = this.noteCloseCb; this.noteCloseCb = null; if (cb) cb(); });
    close.style.marginTop = '18px';
    this.screen('note', [note, close]);
  }
  showNote(n: NoteDef, onClose: () => void) {
    const screen = this.screens['note'];
    const el = screen.querySelector('.hv-note-text') as HTMLElement;
    el.innerHTML = `<div class="hv-note-title">${esc(n.title)}</div>${esc(n.text).replace(/\n/g, '<br>')}`;
    this.noteCloseCb = onClose;
    this.show('note');
  }

  /* ---------- quest journal ---------- */
  private buildQuestLogScreen() {
    const panel = document.createElement('div');
    panel.className = 'hv-panel';
    const h = document.createElement('div');
    h.className = 'hv-h2';
    h.textContent = 'JOURNAL — Hollow Vale';
    const list = document.createElement('div');
    list.id = 'hv-quest-list';
    this.questListEl = list;
    const close = mkBtn('Close', () => { this.show(null); const cb = this.journalCloseCb; this.journalCloseCb = null; if (cb) cb(); });
    close.style.marginTop = '16px';
    panel.append(h, list, close);
    this.screen('questlog', [panel]);
  }
  showQuestLog(entries: QuestLogEntry[], onClose: () => void) {
    this.journalCloseCb = onClose;
    const list = this.questListEl;
    if (!list) return;
    list.innerHTML = '';
    for (const e of entries) {
      const row = document.createElement('div');
      row.className = 'hv-quest-row';
      const mark = e.done
        ? '<span style="color:#4a8f3a">✔</span>'
        : e.active ? '<span style="color:#b83a2a">◆</span>' : '<span style="color:#4a443a">○</span>';
      const tstyle = e.done ? 'text-decoration:line-through;color:#6f695e;' : e.active ? 'color:#e8dfc8;' : 'color:#a89f8c;';
      row.innerHTML = `<div class="qt">${mark} <span style="${tstyle}">${esc(e.title)}</span></div><div class="qd">${esc(e.desc)}</div>`;
      if (e.side) { row.style.paddingLeft = '24px'; row.style.fontSize = '12px'; }
      list.appendChild(row);
    }
    this.show('questlog');
  }

  /* ---------- map overlay ---------- */
  private buildMapScreen() {
    const panel = document.createElement('div');
    panel.className = 'hv-panel';
    panel.style.textAlign = 'center';
    const h = document.createElement('div');
    h.className = 'hv-h2';
    h.textContent = 'VILLAGE MAP';
    const cv = document.createElement('canvas');
    cv.id = 'hv-map-canvas';
    cv.width = 460;
    cv.height = 460;
    const close = mkBtn('Close', () => { this.show(null); const cb = this.mapCloseCb; this.mapCloseCb = null; if (cb) cb(); });
    close.style.marginTop = '14px';
    panel.append(h, cv, close);
    this.screen('map', [panel]);
    this.mapCanvas = cv;
    this.mapCtx = cv.getContext('2d');
  }
  setMapData(d: MapData) {
    this.mapData = d;
    const ms = this.screens['map'];
    if (ms && !ms.classList.contains('hv-hidden')) this.drawMap();
  }
  openMap(onClose: () => void) {
    this.mapCloseCb = onClose;
    this.show('map');
    this.drawMap();
  }
  private drawMap() {
    const ctx = this.mapCtx, d = this.mapData;
    if (!ctx || !d) return;
    const S = 460, k = S / 124;
    const X = (x: number) => (x + 62) * k;
    const Y = (z: number) => (z + 62) * k; // world -Z is up on the map
    const vis = (x: number, z: number) => !d.visited || d.visited.has(`${Math.floor(x / 4) * 4},${Math.floor(z / 4) * 4}`);
    ctx.clearRect(0, 0, S, S);
    ctx.fillStyle = '#1a1712';
    ctx.fillRect(0, 0, S, S);
    // fog of war — visited 4m cells
    if (d.visited) {
      ctx.fillStyle = '#221e18';
      for (const key of d.visited) {
        const parts = key.split(',');
        const cx = parseFloat(parts[0]), cz = parseFloat(parts[1]);
        if (!isFinite(cx) || !isFinite(cz) || cx < -62 || cx >= 62 || cz < -62 || cz >= 62) continue;
        ctx.fillRect(X(cx), Y(cz), 4 * k, 4 * k);
      }
    }
    // grid
    ctx.strokeStyle = 'rgba(120,108,84,0.07)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let c = -62; c <= 62; c += 4) {
      ctx.moveTo(X(c), 0); ctx.lineTo(X(c), S);
      ctx.moveTo(0, Y(c)); ctx.lineTo(S, Y(c));
    }
    ctx.stroke();
    // roads
    ctx.strokeStyle = 'rgba(140,124,96,0.22)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    for (const r of MAP_ROADS) {
      if (!vis((r[0] + r[2]) / 2, (r[1] + r[3]) / 2)) continue;
      ctx.moveTo(X(r[0]), Y(r[1]));
      ctx.lineTo(X(r[2]), Y(r[3]));
    }
    ctx.stroke();
    // buildings
    ctx.lineWidth = 1.5;
    ctx.font = '8px "Courier New", monospace';
    ctx.textAlign = 'center';
    for (const b of MAP_BLD) {
      if (!vis(b.x + b.w / 2, b.z + b.h / 2)) continue;
      ctx.strokeStyle = '#6a5f4a';
      ctx.strokeRect(X(b.x), Y(b.z), b.w * k, b.h * k);
      ctx.fillStyle = '#8f8570';
      ctx.fillText(b.label, X(b.x + b.w / 2), Y(b.z + b.h / 2) + 3);
    }
    // well
    if (vis(0, 2)) {
      ctx.strokeStyle = '#8f8570';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(X(0), Y(2), 5, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#8f8570';
      ctx.fillText('WELL', X(0), Y(2) - 8);
    }
    // gate
    if (vis(0, 55)) {
      ctx.strokeStyle = '#a89f8c';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(X(-2.5), Y(55)); ctx.lineTo(X(2.5), Y(55)); ctx.stroke();
      ctx.fillStyle = '#a89f8c';
      ctx.fillText('GATE', X(0), Y(55) + 13);
    }
    // cemetery
    if (vis(-33, -35)) {
      ctx.strokeStyle = '#5a544a';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(X(-46), Y(-46), 26 * k, 22 * k);
      ctx.fillStyle = '#7d766a';
      ctx.fillText('CEMETERY', X(-33), Y(-35) + 3);
    }
    // merchant cart
    if (vis(10, 48)) {
      ctx.strokeStyle = '#8a7a3a';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(X(8.5), Y(46.5), 3 * k, 3 * k);
      ctx.fillStyle = '#8a7a3a';
      ctx.fillText('CART', X(10), Y(46.5) - 5);
    }
    // ritual circle
    if (vis(-30, -38)) {
      ctx.strokeStyle = '#7a2a2a';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.arc(X(-30), Y(-38), 4 * k, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#8a3a3a';
      ctx.fillText('RITUAL', X(-30), Y(-38) - 4 * k - 5);
    }
    // target: pulsing red X
    if (d.target) {
      const a = 0.5 + 0.5 * Math.sin(performance.now() / 240);
      const tx = X(d.target.x), ty = Y(d.target.z), r = 7;
      ctx.strokeStyle = `rgba(200,42,30,${a.toFixed(2)})`;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(tx - r, ty - r); ctx.lineTo(tx + r, ty + r);
      ctx.moveTo(tx + r, ty - r); ctx.lineTo(tx - r, ty + r);
      ctx.stroke();
      ctx.fillStyle = `rgba(224,130,110,${a.toFixed(2)})`;
      ctx.font = '10px "Courier New", monospace';
      ctx.fillText(d.target.label, tx, ty - 12);
    }
    // player: triangle rotated by yaw (dx=-sin, dz=-cos is forward; -Z is up)
    const fx = -Math.sin(d.yaw), fz = -Math.cos(d.yaw);
    const px = Math.min(Math.max(X(d.px), 10), S - 10);
    const py = Math.min(Math.max(Y(d.pz), 10), S - 10);
    ctx.beginPath();
    ctx.moveTo(px + fx * 9, py + fz * 9);
    ctx.lineTo(px - fx * 6 - fz * 5, py - fz * 6 + fx * 5);
    ctx.lineTo(px - fx * 6 + fz * 5, py - fz * 6 - fx * 5);
    ctx.closePath();
    ctx.fillStyle = '#e8dfc8';
    ctx.fill();
    ctx.strokeStyle = 'rgba(20,16,12,0.9)';
    ctx.lineWidth = 1;
    ctx.stroke();
    // compass N (world -Z) top
    ctx.fillStyle = '#b8a888';
    ctx.font = '10px "Courier New", monospace';
    ctx.fillText('N', S / 2, 11);
    ctx.strokeStyle = '#b8a888';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(S / 2, 26); ctx.lineTo(S / 2, 16); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(S / 2 - 3, 20); ctx.lineTo(S / 2, 15); ctx.lineTo(S / 2 + 3, 20); ctx.stroke();
  }

  /* ---------- compass strip ---------- */
  setCompass(bearing: number | null, label: string) {
    if (bearing === null) {
      if (this.compassOn) { this.compassEl.classList.add('hv-hidden'); this.compassOn = false; }
      return;
    }
    if (!this.compassOn) { this.compassEl.classList.remove('hv-hidden'); this.compassOn = true; }
    if (Math.abs(bearing - this.lastBearing) > 0.03 || label !== this.lastLabel) {
      this.lastBearing = bearing;
      this.lastLabel = label;
      this.compassArrow.style.transform = `rotate(${bearing}rad)`;
      this.compassLabelEl.textContent = label;
    }
  }

  /* ---------- radio overlay ---------- */
  private buildRadioScreen() {
    const panel = document.createElement('div');
    panel.className = 'hv-panel';
    panel.style.textAlign = 'center';
    const h = document.createElement('div');
    h.className = 'hv-h2';
    h.textContent = 'HAND RADIO';
    const readout = document.createElement('div');
    readout.className = 'hv-radio-readout';
    readout.textContent = '—.— MHz';
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '88'; slider.max = '108'; slider.step = '0.1'; slider.value = '100';
    slider.className = 'hv-range';
    slider.style.cssText = 'width:min(320px,80vw);margin:14px auto 4px;display:block;';
    slider.setAttribute('aria-label', 'Radio frequency');
    slider.oninput = () => {
      const f = parseFloat(slider.value);
      readout.textContent = f.toFixed(1) + ' MHz';
      this.cb.onRadioTune?.(f);
    };
    const bars = document.createElement('div');
    bars.id = 'hv-radio-bars';
    for (let i = 0; i < 5; i++) {
      const b = document.createElement('span');
      b.className = 'hv-rbar';
      bars.appendChild(b);
    }
    const msg = document.createElement('div');
    msg.id = 'hv-radio-msg';
    msg.textContent = '...only static...';
    const close = mkBtn('Close', () => { this.show(null); const cb = this.radioCloseCb; this.radioCloseCb = null; if (cb) cb(); });
    close.style.marginTop = '16px';
    panel.append(h, readout, slider, bars, msg, close);
    this.screen('radio', [panel]);
    this.radioFreqEl = readout;
    this.radioSlider = slider;
    this.radioBarsEl = bars;
    this.radioMsgEl = msg;
  }
  setRadioData(d: RadioData) {
    this.radioFreqEl.textContent = d.freq.toFixed(1) + ' MHz';
    if (document.activeElement !== this.radioSlider) this.radioSlider.value = String(d.freq);
    const kids = this.radioBarsEl.children;
    for (let i = 0; i < kids.length; i++) kids[i].classList.toggle('lit', i < Math.round(d.level));
    this.radioMsgEl.textContent = d.message ?? '...only static...';
  }
  openRadio(onClose: () => void) {
    this.radioCloseCb = onClose;
    this.show('radio');
  }

  /* ---------- trade panel ---------- */
  private buildTradeScreen() {
    const panel = document.createElement('div');
    panel.className = 'hv-panel';
    const h = document.createElement('div');
    h.className = 'hv-h2';
    h.textContent = 'WANDERING PEDDLER';
    const list = document.createElement('div');
    list.id = 'hv-trade-list';
    this.tradeListEl = list;
    const close = mkBtn('Close', () => { this.show(null); const cb = this.tradeCloseCb; this.tradeCloseCb = null; if (cb) cb(); });
    close.style.marginTop = '16px';
    panel.append(h, list, close);
    this.screen('trade', [panel]);
  }
  showTrade(trades: TradeEntry[], onBuy: (i: number) => void, onClose: () => void) {
    this.tradeBuyCb = onBuy;
    this.tradeCloseCb = onClose;
    const list = this.tradeListEl;
    if (!list) return;
    list.innerHTML = '';
    trades.forEach((t, i) => {
      const row = document.createElement('div');
      row.className = 'hv-trade-row';
      const lbl = document.createElement('span');
      lbl.textContent = t.label;
      if (!t.afford) lbl.style.color = '#5f594e';
      const buy = mkBtn('Buy', () => this.tradeBuyCb?.(i));
      buy.classList.add('hv-tbuy');
      buy.disabled = !t.afford;
      row.append(lbl, buy);
      list.appendChild(row);
    });
    this.show('trade');
  }

  /* ---------- death / win / pause ---------- */
  private buildDeathScreen() {
    const wrap = document.createElement('div');
    wrap.className = 'hv-death';
    wrap.style.textAlign = 'center';
    wrap.style.justifyContent = 'center';
    const t = document.createElement('h1');
    t.className = 'hv-title';
    t.textContent = 'TAKEN';
    const sub = document.createElement('div');
    sub.className = 'hv-sub';
    sub.textContent = 'the bell tolls for you';
    const btns = document.createElement('div');
    btns.style.marginTop = '30px';
    const bRespawn = mkBtn('Rise Again', () => { this.show(null); this.cb.onRespawn(); }, true);
    bRespawn.id = 'hv-respawn-btn';
    const bMenu = mkBtn('Give Up', () => this.cb.onQuitToMenu());
    btns.append(bRespawn, bMenu);
    wrap.append(t, sub, btns);
    this.screens['death'] = this.screen('death', [wrap]);
    this.screens['death'].classList.add('hv-death');
  }
  private buildWinScreen() {
    const wrap = document.createElement('div');
    wrap.style.textAlign = 'center';
    const t = document.createElement('h1');
    t.className = 'hv-title';
    t.innerHTML = 'YOU <span class="red">ESCAPED</span>';
    const sub = document.createElement('div');
    sub.className = 'hv-sub';
    sub.id = 'hv-win-sub';
    sub.textContent = 'the curse is broken... for now';
    const stats = document.createElement('div');
    stats.id = 'hv-win-stats';
    stats.style.cssText = 'margin-top:20px;font-size:13px;color:#8f887a;line-height:2;letter-spacing:0.08em;';
    const bMenu = mkBtn('Main Menu', () => this.cb.onQuitToMenu(), true);
    bMenu.style.margin = '26px auto 0';
    wrap.append(t, sub, stats, bMenu);
    this.screen('win', [wrap]);
  }
  private buildPauseScreen() {
    const wrap = document.createElement('div');
    wrap.style.textAlign = 'center';
    const t = document.createElement('div');
    t.className = 'hv-h2';
    t.style.border = 'none';
    t.textContent = 'Paused';
    const bResume = mkBtn('Resume', () => { this.show(null); this.cb.onResume(); }, true);
    const bHelp = mkBtn('Controls', () => { this._returnScreen = 'pause'; this.show('help'); });
    const bSet = mkBtn('Settings', () => { this._returnScreen = 'pause'; this.show('settings'); });
    const bQuit = mkBtn('Quit to Menu', () => this.cb.onQuitToMenu());
    wrap.append(t, bResume, bHelp, bSet, bQuit);
    this.screen('pause', [wrap]);
  }
  private buildLoadingScreen() {
    const wrap = document.createElement('div');
    wrap.style.textAlign = 'center';
    const t = document.createElement('div');
    t.className = 'hv-title';
    t.style.fontSize = 'clamp(30px, 6vw, 60px)';
    t.textContent = 'HOLLOW VALE';
    const bar = document.createElement('div');
    bar.className = 'hv-loadingbar';
    const fill = document.createElement('i');
    fill.id = 'hv-load-fill';
    bar.appendChild(fill);
    const tip = document.createElement('div');
    tip.className = 'hv-tip';
    tip.id = 'hv-load-tip';
    tip.textContent = 'the village remembers';
    wrap.append(t, bar, tip);
    this.screen('loading', [wrap]);
  }
  loading(p: number, tip?: string) {
    const f = document.getElementById('hv-load-fill');
    if (f) f.style.width = Math.round(p * 100) + '%';
    if (tip) { const t = document.getElementById('hv-load-tip'); if (t) t.textContent = tip; }
  }

  showWin(stats: string, sub?: string) {
    const s = document.getElementById('hv-win-stats');
    if (s) s.innerHTML = stats;
    if (sub) { const e = document.getElementById('hv-win-sub'); if (e) e.textContent = sub; }
    this.show('win');
  }
  showDeath(canRespawn: boolean) {
    const b = document.getElementById('hv-respawn-btn');
    if (b) b.classList.toggle('hv-hidden', !canRespawn);
    this.show('death');
  }

  /* ---------- HUD ---------- */
  setHUDEnabled(on: boolean) {
    this.hud.classList.toggle('hv-hidden', !on);
    if (!on) this.touchWrap.classList.add('hv-hidden');
    else this.applyTouchSetting(this._settings);
  }

  /* safe read of newer Player fields (jammed/statuses/breathT/batteryType/extended weapons) */
  private pst(p: Player): {
    jammed: boolean; unjamT: number; bleeding: number; poison: number; brokenLeg: number;
    breathT: number; batteryType: string; has: (w: string) => boolean;
  } {
    const o = p as unknown as Record<string, unknown>;
    const stObj = (o['statuses'] && typeof o['statuses'] === 'object') ? o['statuses'] as Record<string, number> : {};
    const num = (k: string) => (typeof o[k] === 'number' ? (o[k] as number) : 0);
    return {
      jammed: !!o['jammed'],
      unjamT: num('unjamT'),
      bleeding: stObj['bleeding'] || 0,
      poison: stObj['poison'] || 0,
      brokenLeg: stObj['brokenLeg'] || 0,
      breathT: num('breathT'),
      batteryType: typeof o['batteryType'] === 'string' ? (o['batteryType'] as string) : 'alkaline',
      has: (w: string) => p.weapons.includes(w as WeaponId),
    };
  }

  updateHUD(p: Player, q: Quests, opts: { versus?: boolean; timeLeft?: number; isMonster?: boolean; coopAlive?: number; coopTotal?: number }) {
    this.bars.hp.style.width = p.health + '%';
    this.bars.st.style.width = p.stamina + '%';
    this.bars.fe.style.width = p.fear + '%';
    this.bars.ba.style.width = Math.min(100, (p.battery / (p.batteryCap || 100)) * 100) + '%';
    this.vignette.style.opacity = String(Math.max(p.fear / 145, p.health < 35 ? 0.35 : 0));
    const obj = q.objectiveText();
    this.objMain.textContent = opts.isMonster ? 'Hunt them all before dawn' : obj.main;
    this.objSides.innerHTML = opts.isMonster ? '' : obj.sides.map(s => esc(s)).join('<br>');
    // torch label reflects battery type
    const st = this.pst(p);
    this.barLabels['ba'].textContent = 'TORCH (' + st.batteryType.toUpperCase() + ')';
    // status chips
    const secs = (t: number) => Math.max(1, Math.ceil(t)) + 's';
    const chips: string[] = [];
    if (st.jammed) chips.push(stChip('reload', '#c23a2a', 'JAM', secs(st.unjamT)));
    if (st.bleeding > 0) chips.push(stChip('drop', '#c23a2a', '', secs(st.bleeding)));
    if (st.poison > 0) chips.push(stChip('skull', '#6a9a3a', '', secs(st.poison)));
    if (st.brokenLeg > 0) chips.push(stChip('bone', '#c2a23a', '', secs(st.brokenLeg)));
    if (st.breathT > 0) chips.push(stChip('breath', '#4aa8a8', '', secs(st.breathT)));
    this.statusEl.innerHTML = chips.join('');
    this.statusEl.classList.toggle('hv-hidden', chips.length === 0);
    // hotbar
    const slots: { key: string; label: string; cnt: string | null }[] = [];
    slots.push({ key: 'knife', label: '1 KNIFE', cnt: null });
    if (p.hasWeapon('pistol')) slots.push({ key: 'pistol', label: '2 REVOLVER', cnt: String(p.mag.pistol) + '/' + (p.inv.ammo_pistol || 0) });
    if (p.hasWeapon('rifle')) slots.push({ key: 'rifle', label: '3 RIFLE', cnt: String(p.mag.rifle) + '/' + (p.inv.ammo_rifle || 0) });
    if (st.has('axe')) slots.push({ key: 'axe', label: '4 AXE', cnt: null });
    if (st.has('torch')) slots.push({ key: 'torch', label: '5 TORCH', cnt: null });
    slots.push({ key: 'bandage', label: 'H BANDAGE', cnt: String(p.inv.bandage || 0) });
    slots.push({ key: 'pills', label: 'H PILLS', cnt: String(p.inv.pills || 0) });
    slots.push({ key: 'grenade', label: 'Q GRENADE', cnt: String(p.inv.grenade || 0) });
    this.hotbarEl.innerHTML = '';
    const cur = String(p.current);
    for (const s of slots) {
      const d = document.createElement('div');
      d.className = 'hv-slot' + (cur === s.key ? ' active' : '');
      d.innerHTML = esc(s.label) + (s.cnt !== null ? `<span class="cnt">${esc(s.cnt)}</span>` : '');
      this.hotbarEl.appendChild(d);
    }
    this.crosshair.style.display = p.current === 'knife' ? 'none' : 'block';
    // timer
    if (opts.versus) {
      this.timerEl.classList.remove('hv-hidden');
      const m = Math.floor((opts.timeLeft || 0) / 60);
      const sec = Math.floor((opts.timeLeft || 0) % 60);
      this.timerEl.textContent = `${m}:${String(sec).padStart(2, '0')}`;
      this.roleEl.textContent = opts.isMonster ? 'YOU ARE THE SHEPHERD' : 'SURVIVE';
    } else {
      this.timerEl.classList.add('hv-hidden');
      this.roleEl.textContent = opts.coopTotal ? `CO-OP — ${opts.coopAlive}/${opts.coopTotal} ALIVE` : '';
    }
  }

  prompt(text: string | null) {
    if (text) {
      this.promptEl.textContent = text;
      this.promptEl.classList.remove('hv-hidden');
    } else this.promptEl.classList.add('hv-hidden');
  }

  message(text: string, big = false) {
    const m = document.createElement('div');
    m.className = 'hv-msg' + (big ? ' big' : '');
    m.textContent = text;
    this.messagesEl.appendChild(m);
    setTimeout(() => m.remove(), 3500);
    while (this.messagesEl.children.length > 4) this.messagesEl.firstChild?.remove();
  }

  subtitle(text: string, dur = 4) {
    this.subtitleEl.textContent = text;
    this.subtitleTimer = dur;
  }

  flashDamage() {
    this.damageEl.style.opacity = '0.9';
    setTimeout(() => { this.damageEl.style.opacity = '0'; }, 240);
    const n = 1 + Math.floor(Math.random() * 2); // 1-2 splats per hit
    for (let i = 0; i < n; i++) this.spawnSplat();
  }
  private spawnSplat() {
    const el = document.createElement('div');
    el.className = 'hv-splat';
    const s = 90 + Math.random() * 130;
    el.style.width = s + 'px';
    el.style.height = s * (0.7 + Math.random() * 0.5) + 'px';
    el.style.left = (Math.random() * 100) + '%';
    el.style.top = (Math.random() * 100) + '%';
    el.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
    el.style.opacity = '0.9';
    el.style.transition = 'opacity 6s linear';
    this.bloodEl.appendChild(el);
    while (this.bloodEl.childElementCount > 6) this.bloodEl.firstElementChild?.remove();
    setTimeout(() => { el.style.opacity = '0'; }, 80);
    setTimeout(() => { el.remove(); }, 7000);
  }

  /* ---------- antique camera frame ---------- */
  setCameraMode(on: boolean, film: number) {
    this.camframeEl.classList.toggle('hv-hidden', !on);
    if (on) this.camframeLabel.textContent = `ANTIQUE CAMERA — FILM ${film}`;
  }

  fadeIn() { this.fadeEl.style.opacity = '0'; }
  fadeOut() { this.fadeEl.style.opacity = '1'; }

  setTeammates(list: { name: string; hp: number; downed: boolean; dead: boolean; color: string }[]) {
    this.teammatesEl.innerHTML = list.map(t =>
      `<div class="hv-mate">${t.downed ? '☠' : t.dead ? '✝' : '•'} ${esc(t.name)}<span class="mbar"><i style="width:${Math.max(0, t.hp)}%;${t.downed ? 'background:#8f1d1d' : ''}"></i></span></div>`
    ).join('');
  }

  update(dt: number) {
    if (this.subtitleTimer > 0) {
      this.subtitleTimer -= dt;
      if (this.subtitleTimer <= 0) this.subtitleEl.textContent = '';
    }
    this.mapAcc += dt;
    if (this.mapAcc >= 0.25) { // ~4 fps map redraw
      this.mapAcc = 0;
      const ms = this.screens['map'];
      if (ms && !ms.classList.contains('hv-hidden')) this.drawMap();
    }
  }

  /* ---------- touch controls ---------- */
  private applyTouchSetting(s: Partial<Settings>) {
    const want = s.showTouch === 'on' || (s.showTouch !== 'off' && (matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window));
    this.touchEnabled = want;
    this.touchWrap.classList.toggle('hv-hidden', !want);
    if (!want) {
      this.stickBase.classList.add('hv-hidden');
      this.stickNub.classList.add('hv-hidden');
    }
  }
  refreshTouch(settings: Settings) { this.applyTouchSetting(settings); }

  private applyLayoutFor(btn: HTMLElement, id: string) {
    const l = this.layout[id];
    if (!l) return;
    const w = 62 * (l.scale || 1);
    btn.style.right = 'auto';
    btn.style.bottom = 'auto';
    btn.style.width = w + 'px';
    btn.style.height = w + 'px';
    btn.style.left = (l.x * window.innerWidth - w / 2) + 'px';
    btn.style.top = (l.y * window.innerHeight - w / 2) + 'px';
  }

  private collectLayout(): TouchLayout {
    const out: TouchLayout = {};
    for (const id of Object.keys(this.touchBtns)) {
      const r = this.touchBtns[id].getBoundingClientRect();
      out[id] = {
        x: (r.left + r.width / 2) / window.innerWidth,
        y: (r.top + r.height / 2) / window.innerHeight,
        scale: r.width / 62,
      };
    }
    return out;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
    if (this.editBar) this.editBar.classList.toggle('hv-hidden', !this.editMode);
    for (const id of Object.keys(this.touchBtns)) {
      this.touchBtns[id].classList.toggle('hv-editing', this.editMode);
      if (!this.editMode) this.touchBtns[id].classList.remove('hv-sel');
    }
    if (this.editMode) {
      this.selectedBtn = null;
      this.stickBase.classList.add('hv-hidden');
      this.stickNub.classList.add('hv-hidden');
      this.lookZoneEl.style.pointerEvents = 'none';
      if (this.editSlider) this.editSlider.value = '1';
    } else {
      this.selectedBtn = null;
      this.lookZoneEl.style.pointerEvents = '';
    }
  }

  private selectTouchBtn(btn: HTMLButtonElement) {
    if (this.selectedBtn && this.selectedBtn !== btn) this.selectedBtn.classList.remove('hv-sel');
    this.selectedBtn = btn;
    btn.classList.add('hv-sel');
    if (this.editSlider) this.editSlider.value = String(Math.round((btn.getBoundingClientRect().width / 62) * 100) / 100);
  }

  private buildEditBar() {
    const bar = document.createElement('div');
    bar.id = 'hv-editbar';
    bar.classList.add('hv-hidden');
    const hint = document.createElement('span');
    hint.textContent = 'EDITING — drag buttons, slider = size, then SAVE';
    const slider = document.createElement('input');
    slider.type = 'range';
    slider.id = 'hv-edit-size';
    slider.min = '0.7'; slider.max = '1.6'; slider.step = '0.05'; slider.value = '1';
    slider.setAttribute('aria-label', 'Selected button size');
    slider.oninput = () => {
      const b = this.selectedBtn;
      if (!b) return;
      const v = parseFloat(slider.value);
      const r = b.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const w = 62 * v;
      b.style.right = 'auto'; b.style.bottom = 'auto';
      b.style.width = w + 'px'; b.style.height = w + 'px';
      b.style.left = Math.min(Math.max(cx - w / 2, 0), window.innerWidth - w) + 'px';
      b.style.top = Math.min(Math.max(cy - w / 2, 0), window.innerHeight - w) + 'px';
    };
    const bSave = mkBtn('Save', () => {
      const l = this.collectLayout();
      this.layout = l;
      saveTouchLayout(l);
      this.toggleEditMode();
    });
    const bReset = mkBtn('Reset', () => {
      clearTouchLayout();
      this.layout = {};
      for (const id of Object.keys(this.touchBtns)) {
        this.touchBtns[id].style.cssText = this.touchDefaults[id] || '';
        this.touchBtns[id].classList.remove('hv-sel');
      }
      this.selectedBtn = null;
      slider.value = '1';
    });
    const bDone = mkBtn('Done', () => this.toggleEditMode());
    for (const b of [bSave, bReset, bDone]) b.classList.add('hv-ebtn');
    bar.append(hint, slider, bSave, bReset, bDone);
    this.touchWrap.appendChild(bar);
    this.editBar = bar;
    this.editSlider = slider;
  }

  private bindTouch(settings: Settings) {
    this.applyTouchSetting(settings);
    // joystick
    let stickId = -1;
    const stickCenter = { x: 0, y: 0 };
    const R = 52;
    const zoneL = document.createElement('div');
    zoneL.className = 'zone';
    zoneL.style.cssText = 'left:0;bottom:0;width:45%;height:70%;';
    zoneL.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (this.editMode) return;
      const t = e.changedTouches[0];
      if (stickId >= 0) return;
      stickId = t.identifier;
      stickCenter.x = t.clientX; stickCenter.y = t.clientY;
      this.stickBase.classList.remove('hv-hidden');
      this.stickNub.classList.remove('hv-hidden');
      this.stickBase.style.left = (t.clientX - 60) + 'px';
      this.stickBase.style.top = (t.clientY - 60) + 'px';
      this.stickNub.style.left = (t.clientX - 26) + 'px';
      this.stickNub.style.top = (t.clientY - 26) + 'px';
    }, { passive: false });
    zoneL.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (this.editMode) return;
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier !== stickId) continue;
        let dx = t.clientX - stickCenter.x, dy = t.clientY - stickCenter.y;
        const d = Math.hypot(dx, dy);
        if (d > R) { dx = dx / d * R; dy = dy / d * R; }
        this.stickNub.style.left = (stickCenter.x + dx - 26) + 'px';
        this.stickNub.style.top = (stickCenter.y + dy - 26) + 'px';
        this.input.touchMoveVec(dx / R, dy / R);
      }
    }, { passive: false });
    const stickEnd = (e: TouchEvent) => {
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier === stickId) {
          stickId = -1;
          this.input.touchMoveVec(0, 0);
          this.stickBase.classList.add('hv-hidden');
          this.stickNub.classList.add('hv-hidden');
        }
      }
    };
    zoneL.addEventListener('touchend', stickEnd);
    zoneL.addEventListener('touchcancel', stickEnd);
    this.touchWrap.appendChild(zoneL);
    // look zone
    const lookZone = document.createElement('div');
    lookZone.id = 'hv-lookzone';
    this.lookZoneEl = lookZone;
    let lookId = -1;
    const last = { x: 0, y: 0 };
    lookZone.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (this.editMode) return;
      const t = e.changedTouches[0];
      if (lookId >= 0) return;
      lookId = t.identifier;
      last.x = t.clientX; last.y = t.clientY;
    }, { passive: false });
    lookZone.addEventListener('touchmove', (e) => {
      e.preventDefault();
      if (this.editMode) return;
      for (const t of Array.from(e.changedTouches)) {
        if (t.identifier !== lookId) continue;
        this.input.touchLook(t.clientX - last.x, t.clientY - last.y);
        last.x = t.clientX; last.y = t.clientY;
      }
    }, { passive: false });
    const lookEnd = (e: TouchEvent) => {
      for (const t of Array.from(e.changedTouches)) if (t.identifier === lookId) lookId = -1;
    };
    lookZone.addEventListener('touchend', lookEnd);
    lookZone.addEventListener('touchcancel', lookEnd);
    this.touchWrap.appendChild(lookZone);
    // buttons: (id, icon, style, onDown, onUp?, toggle?) — icons via iconSvg, layout persisted
    const mkTBtn = (id: string, icon: string, label: string, style: string, onDown: () => void, onUp?: () => void, toggle?: () => boolean) => {
      const b = document.createElement('button');
      b.id = 'hv-tb-' + id;
      b.className = 'hv-tbtn';
      b.setAttribute('aria-label', label);
      b.title = label;
      b.innerHTML = `<span class="hv-tico">${iconSvg(icon, 26)}</span>`;
      this.touchDefaults[id] = style;
      b.setAttribute('style', style);
      const down = (e?: Event) => {
        if (this.editMode) { e?.preventDefault(); return; } // edit mode: no game actions
        b.classList.add('on');
        onDown();
        if (toggle && !toggle()) b.classList.remove('on');
      };
      const up = (e?: Event) => {
        if (this.editMode) { e?.preventDefault(); return; }
        if (!toggle) b.classList.remove('on');
        if (onUp) onUp();
      };
      b.addEventListener('touchstart', (e) => { e.preventDefault(); down(); }, { passive: false });
      b.addEventListener('touchend', (e) => { e.preventDefault(); up(); }, { passive: false });
      // pointer-event dragging (edit mode only; works for touch + mouse)
      let dragging = false;
      let dragOff = { x: 0, y: 0 };
      b.addEventListener('pointerdown', (e) => {
        if (!this.editMode) return;
        e.preventDefault();
        e.stopPropagation();
        this.selectTouchBtn(b);
        try { b.setPointerCapture(e.pointerId); } catch { /* ignore */ }
        const r = b.getBoundingClientRect();
        dragOff = { x: e.clientX - r.left, y: e.clientY - r.top };
        b.style.right = 'auto';
        b.style.bottom = 'auto';
        dragging = true;
      });
      b.addEventListener('pointermove', (e) => {
        if (!dragging || !this.editMode) return;
        e.preventDefault();
        const w = b.getBoundingClientRect().width;
        b.style.left = Math.min(Math.max(e.clientX - dragOff.x, 0), window.innerWidth - w) + 'px';
        b.style.top = Math.min(Math.max(e.clientY - dragOff.y, 0), window.innerHeight - w) + 'px';
      });
      const endDrag = () => { dragging = false; };
      b.addEventListener('pointerup', endDrag);
      b.addEventListener('pointercancel', endDrag);
      this.applyLayoutFor(b, id);
      this.touchBtns[id] = b;
      this.touchWrap.appendChild(b);
      return b;
    };
    mkTBtn('attack', 'attack', 'Attack', 'right:22px;bottom:86px;',
      () => this.input.setButton('attack', true), () => this.input.setButton('attack', false));
    mkTBtn('interact', 'interact', 'Interact', 'right:100px;bottom:26px;',
      () => this.input.setButton('interact', true), () => this.input.setButton('interact', false));
    mkTBtn('reload', 'reload', 'Reload', 'right:24px;bottom:168px;',
      () => this.input.setButton('reload', true), () => this.input.setButton('reload', false));
    mkTBtn('flash', 'flash', 'Torch', 'left:150px;top:18px;',
      () => this.input.setButton('flash', true));
    mkTBtn('crouch', 'crouch', 'Crouch', 'left:20px;top:18px;', () => { /* toggled */ }, undefined, () => {
      this.crouchToggle = !this.crouchToggle;
      this.input.buttons['crouch'] = this.crouchToggle;
      return this.crouchToggle;
    });
    mkTBtn('sprint', 'run', 'Sprint', 'left:150px;top:88px;', () => { /* toggled */ }, undefined, () => {
      this.sprintToggle = !this.sprintToggle;
      this.input.buttons['sprint'] = this.sprintToggle;
      return this.sprintToggle;
    });
    mkTBtn('cam', 'cam', 'Camera view', 'left:20px;top:88px;',
      () => this.input.setButton('cam', true));
    mkTBtn('grenade', 'grenade', 'Noise grenade', 'right:100px;bottom:110px;',
      () => this.input.setButton('grenade', true));
    mkTBtn('heal', 'heal', 'Heal', 'right:22px;bottom:250px;',
      () => this.input.setButton('heal', true));
    mkTBtn('pause', 'pause', 'Menu', 'right:16px;top:14px;width:44px;height:36px;border-radius:4px;',
      () => this.input.setButton('pause', true));
    mkTBtn('throw', 'throw', 'Throw bottle / brick', 'right:178px;bottom:26px;',
      () => this.input.setButton('throw', true));
    mkTBtn('map', 'map', 'Map', 'right:100px;top:80px;',
      () => this.cb.onToggleOverlay?.('map'));
    mkTBtn('quest', 'quest', 'Journal', 'right:100px;top:18px;',
      () => this.cb.onToggleOverlay?.('quest'));
    mkTBtn('radio', 'radio', 'Hand radio', 'left:20px;top:158px;',
      () => this.cb.onToggleOverlay?.('radio'));
    mkTBtn('dynamo', 'dynamo', 'Hand dynamo', 'right:24px;bottom:332px;',
      () => this.input.setButton('dynamo', true), () => this.input.setButton('dynamo', false));
    mkTBtn('breath', 'breath', 'Hold breath', 'right:100px;bottom:194px;',
      () => this.input.setButton('breath', true), () => this.input.setButton('breath', false));
    mkTBtn('swap', 'swap', 'Swap weapon', 'right:178px;bottom:110px;',
      () => this.cb.onCycleWeapon?.());
    mkTBtn('edit', 'edit', 'Edit button layout', 'right:70px;top:14px;width:44px;height:36px;border-radius:4px;',
      () => this.toggleEditMode());
  }
  resetSprintToggle() {
    this.sprintToggle = false;
    this.crouchToggle = false;
    this.input.buttons['sprint'] = false;
    this.input.buttons['crouch'] = false;
    this.touchBtns['sprint']?.classList.remove('on');
    this.touchBtns['crouch']?.classList.remove('on');
  }
}

/* ---------- dom helpers ---------- */
function mkBtn(label: string, onClick: () => void, primary = false): HTMLButtonElement {
  const b = document.createElement('button');
  b.className = 'hv-btn' + (primary ? ' primary' : '');
  b.textContent = label;
  b.addEventListener('click', onClick);
  return b;
}
function mkRow(parent: HTMLElement, label: string, control: HTMLElement) {
  const row = document.createElement('div');
  row.className = 'hv-row';
  const l = document.createElement('label');
  l.textContent = label;
  row.append(l, control);
  parent.appendChild(row);
}
function mkSelect(opts: string[], val: string, onChange: (v: string) => void): HTMLSelectElement {
  const s = document.createElement('select');
  s.className = 'hv-select';
  opts.forEach(o => {
    const op = document.createElement('option');
    op.value = o;
    op.textContent = o.toUpperCase();
    if (o === val) op.selected = true;
    s.appendChild(op);
  });
  s.onchange = () => onChange(s.value);
  return s;
}
function mkRange(min: number, max: number, val: number, onChange: (v: number) => void): HTMLInputElement {
  const r = document.createElement('input');
  r.type = 'range';
  r.className = 'hv-range';
  r.min = String(min); r.max = String(max);
  r.step = '0.05';
  r.value = String(val);
  r.style.width = '140px';
  r.oninput = () => onChange(parseFloat(r.value));
  return r;
}
function mkCheck(val: boolean, onChange: (v: boolean) => void): HTMLInputElement {
  const c = document.createElement('input');
  c.type = 'checkbox';
  c.checked = val;
  c.style.accentColor = '#8f1d1d';
  c.onchange = () => onChange(c.checked);
  return c;
}
function stChip(icon: string, color: string, label: string, secs: string): string {
  return `<span class="hv-st" style="color:${color}">${iconSvg(icon, 18)}${label ? `<b>${label}</b>` : ''}<b>${secs}</b></span>`;
}
function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
export type { WeaponId };
