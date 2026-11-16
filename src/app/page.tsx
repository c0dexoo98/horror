import Image from 'next/image';

const shots = [
  { src: '/game-frame.png', alt: 'Hollow Vale — the village at night' },
  { src: '/vale-500.png', alt: 'The church door groans open' },
  { src: '/vale-3000.png', alt: 'The Mother fight at the altar' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05060a] text-zinc-200">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-xs tracking-[0.4em] text-amber-200/70">HOLLOWENGINE 2 · PURE JAVA · NO THREE.JS</p>
        <h1 className="mt-3 text-5xl font-black text-amber-100">HOLLOW VALE</h1>
        <p className="mt-2 text-lg text-zinc-400">درهٔ توخالی — survival horror، بازنویسی‌شده کامل روی موتور HollowEngine.</p>

        <p className="mt-6 max-w-3xl leading-8 text-zinc-300">
          خواهرت گم شده. دره خالی است. یادداشت‌ها را بخوان، کلید زنگ‌زده را از چاه بردار،
          کلیسا را باز کن، پنج طلسم مومی را جمع کن، آیین طرد را بر مذبح اجرا کن — و وقتی
          <span className="text-purple-300"> مادر </span>
          تجلی می‌کند، با فلاش دوربین کورش کن و بزن. اگر زنده ماندی، از دروازهٔ جنوبی فرار کن.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {shots.map((s) => (
            <Image key={s.src} src={s.src} alt={s.alt} width={960} height={540}
                   className="w-full rounded-lg border border-zinc-800" />
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 font-mono text-sm text-zinc-300">
          <p className="text-amber-200/80">اجرا (JDK 21، بدون وابستگی):</p>
          <pre className="mt-3 whitespace-pre-wrap">{`# کل کمپین به‌صورت قطعی و هدلس (بات خود بازی):
../hollowengine/hollow run game --frames 6500

# فریم رندرشده:
../hollowengine/hollow render game --out frame.png

# ادیتور + حالت بازی (F5، WASD/جهت‌ها، E عمل، F چاقو، G شلیک، R خشاب، T چراغ‌قوه، X فلاش):
../hollowengine/hollow editor game`}</pre>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 text-sm text-zinc-400">
          <div>
            <h2 className="font-bold text-zinc-200">سیستم‌ها</h2>
            <ul className="mt-2 space-y-1">
              <li>• فیزیک AABB + جاذبه + برخورد (بدنه‌های dynamic)</li>
              <li>• دشمنان با کلاس (Ghoul، Mother) — تشخیص صدا و دید</li>
              <li>• چاقو با Backstab ×۳، هفت‌تیر با خشاب، فلاش کورکننده</li>
              <li>• چراغ‌قوهٔ سوسوزن با باتری، چند-نور reach‌دار، مه و وینیت</li>
              <li>• HUD فونت بیت‌مپ روی کانال hud() اسکریپت</li>
              <li>• ۷ مأموریت + ۲ پایان (ESCAPED / DARKNESS) — خروجی قطعی</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-zinc-200">تضمین‌ها</h2>
            <ul className="mt-2 space-y-1">
              <li>• موتور: ۱۷۹ چک خودکار ALL GREEN (verify.sh)</li>
              <li>• بازی: کمپین کامل با بات قطعی تا پایان ESCAPED</li>
              <li>• همان seed = همان امتیاز = همان PNG</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
