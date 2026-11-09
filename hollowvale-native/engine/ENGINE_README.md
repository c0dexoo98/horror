# HollowEngine 🎮

موتور بازی‌سازی حرفه‌ای برای اندروید — ۱۰۰٪ جاوا خالص، بدون وابستگی خارجی، بدون WebView، بدون موتور شخص ثالث.

**HollowEngine** is a professional 2D/2.5D game engine for Android, written in pure Java on top of the raw Android SDK + GLES2. It was extracted from the HOLLOW VALE project and rebuilt from scratch as a standalone, reusable framework.

---

## ✨ قابلیت‌ها (Features)

### هسته (Core)
| سیستم | توضیح |
|---|---|
| `TimeStep` | حلقه‌ی بازی با گام ثابت (Fixed-Timestep) + نرمال‌سازی فریم |
| `Tasks` | اجرای کارها روی ترد اصلی یا استخر کارگر + لغو همکارانه |
| `Tween` | انیمیشن‌سازی با ۸ منحنی از پیش آماده (Elastic, Back, Smooth…) |
| `Scheduler` | تایمر، اجرای تأخیری و تکرارشونده |
| `StateMachine` | ماشین حالت برای AI / رابط کاربری / مراحل بازی |
| `Profiler` | FPS، میانگین/حداقل/حداکثر زمان فریم |
| `EngineLog` | لاگ مرکزی با سطح‌بندی |

### گرافیک (Graphics — GLES2)
| سیستم | توضیح |
|---|---|
| `ShaderProgram` | کامپایل شیدر + کش لوکیشن یونیفرم‌ها + ست‌کرهای ضدخرابی |
| `Texture` | بیت‌مپ/بافر، فیلتر NEAREST/LINEAR، **Mipmap + Trilinear + Anisotropic** |
| `RenderTarget` | FBO آفسکرین برای رندر با کیفیت پایین و پست‌پروسسینگ |
| `FullscreenPass` | کواچه تمام‌صفحه برای صحنه‌های Raycast و افکت‌های پست |
| `SpriteBatch` | بچ‌کردن کوادها (تک draw-call) با رنگ per-vertex |
| `Camera2D` | دوربین ۲بعدی با زوم، چرخش و لرزش صفحه |

### صدا (Audio)
- `AudioEngine`: باس SFX (SoundPool چند-کاناله) + باس موسیقی (کراس‌فید + fade-in) + باس امبینت + میکسر volume مستقل

### رسانه (Media)
- `VideoStage`: پخش ویدئوی سینمایی با نمایش **کامل بدون برش (Fit-Center)** + پس‌زمینه‌ی تار از فریم‌های خود ویدئو + حلقه‌ی بی‌درز + fallback ضدکرش

### رابط کاربری (UI)
- `Typefaces`: کش فونت‌های TTF
- `Rtl`: ابزارهای متن فارسی/RTL (تشخیص جهت، ترتیب دیداری، ارقام فارسی)

### صحنه و جلوه‌ها (Scene & FX)
- `Scene`/`Entity`/`Sprite`: گراف صحنه‌ی ۲بعدی
- `Particles`: سیستم ذرات ساختاریافته بدون GC
- `InputFrame`: اسنپ‌شات ورودی با اکشن‌های لحظه‌ای (edge-triggered)

### ذخیره‌سازی (Save)
- `SaveStore`: فروشگاه فایل ذخیره/تنظیمات
- `Assets`: خواندن raw/asset/bitmap

---

## 🏗 معماری

```
com.hollowengine
├── core       حلقه بازی، زمان، ترد، توئین، تایمر، FSM، پروفایلر
├── math       MathX، Vec2، Rng، Noise (fBm)
├── graphics   Gfx، ShaderProgram، Texture، RenderTarget، FullscreenPass، SpriteBatch، Camera2D
├── audio      AudioEngine (SFX + Music + Ambience)
├── media      VideoStage
├── ui         Typefaces، Rtl
├── input      InputFrame
├── scene      Scene، Entity، Sprite
├── fx         Particles
├── save       SaveStore
├── assets     Assets
├── app        ImmersiveActivity، GameSurfaceView، EngineRenderer
└── utils      FpsCounter
```

جزئیات کامل: [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)

## 🚀 استفاده در پروژه‌ی خود

```gradle
// settings.gradle
include ':engine'
```
```gradle
// app/build.gradle
dependencies { implementation project(':engine') }
```

سپس:

```java
public class MyGame extends ImmersiveActivity { ... }
ShaderProgram prog = new ShaderProgram(vs, fs, "my-shader");
RenderTarget rt = new RenderTarget(960, 540);
AudioEngine audio = new AudioEngine(this, new AudioEngine.Volumes());
audio.loadSfx("shoot", "hurt", "pickup");
VideoStage cinematic = new VideoStage(this, "intro", true, 1f, false, failListener);
```

## 📦 ساخت

```bash
export JAVA_HOME=<jdk21> ANDROID_HOME=<sdk>
./gradlew :engine:assembleRelease
```

## 📜 مجوز

MIT — آزاد برای هر استفاده‌ای. متن کامل: [`LICENSE`](LICENSE)
