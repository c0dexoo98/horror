// APK entry: boot the game inside the Android WebView
import { launch } from '../src/game/main';

function boot() {
  const el = document.getElementById('hv-container');
  if (el) launch(el);
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
