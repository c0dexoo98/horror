package ir.hollowvale.game;

import java.util.HashMap;

/** HOLLOW VALE v4 — all Persian strings (fa) + shared keys. */
public final class Str {
    // ---------------- main menu ----------------
    public static final String GAME_TITLE = "HOLLOW VALE";
    public static final String TITLE_FA = "درهٔ توخالی";
    public static final String TAGLINE = "هیچ‌کس از دره بیرون نمی‌رود…";
    public static final String BTN_NEW = "بازی جدید";
    public static final String BTN_CONTINUE = "ادامه";
    public static final String BTN_SAVES = "ذخیره‌ها";
    public static final String BTN_SETTINGS = "تنظیمات";
    public static final String BTN_ACH = "دستاوردها";
    public static final String BTN_CREDITS = "سازندگان";
    public static final String BTN_EXIT = "خروج";
    public static final String TAP_TO_START = "لمس کن تا وارد شوی";
    public static final String EXIT_CONFIRM = "واقعاً می‌خواهی خارج شوی؟";
    public static final String YES = "بله";
    public static final String NO = "نه";
    public static final String SLOT = "جایگاه";
    public static final String EMPTY_SLOT = "— خالی —";
    public static final String AUTOSAVE = "ذخیرهٔ خودکار";
    public static final String SAVE = "ذخیره";
    public static final String LOAD = "بارگذاری";
    public static final String DELETE = "حذف";
    public static final String DEATHS = "مرگ‌ها";
    public static final String PLAYTIME = "زمان بازی";
    public static final String CHAPTER = "فصل";

    // ---------------- settings ----------------
    public static final String SET_SENS = "حساسیت دوربین";
    public static final String SET_VOL_MASTER = "صدای کلی";
    public static final String SET_VOL_MUSIC = "موسیقی";
    public static final String SET_VOL_SFX = "جلوه‌های صوتی";
    public static final String SET_QUALITY = "کیفیت گرافیک";
    public static final String QUALITY_LOW = "کم";
    public static final String QUALITY_MED = "متوسط";
    public static final String QUALITY_HIGH = "بالا";
    public static final String SET_FOG = "مه حجمی";
    public static final String SET_GRAIN = "دانهٔ فیلم";
    public static final String SET_INVERT = "برعکس بودن نگاه";
    public static final String SET_VIBRATE = "لرزش";
    public static final String SET_SHOWFPS = "نمایش FPS";
    public static final String ON = "روشن";
    public static final String OFF = "خاموش";

    // ---------------- HUD ----------------
    public static final String H_HEALTH = "سلامتی";
    public static final String H_SANITY = "روان";
    public static final String H_STAMINA = "انرژی";
    public static final String H_BATTERY = "باتری";
    public static final String P_OPEN = "باز کردن در";
    public static final String P_CLOSE = "بستن در";
    public static final String P_LOCKED = "قفل است";
    public static final String P_NEED_KEY_IRON = "کلید آهنی لازم است";
    public static final String P_NEED_KEY_MANSION = "کلید عمارت لازم است";
    public static final String P_CODE = "رمز را وارد کن";
    public static final String P_PICKUP = "برداشتن";
    public static final String P_READ = "خواندن";
    public static final String P_SEARCH = "جست‌وجو";
    public static final String P_SEARCHED = "قبلاً جست‌وجو شده";
    public static final String P_CANDLE = "افروختن شمع (ذخیره)";
    public static final String P_BREAK = "شکستن با تبر";
    public static final String P_TALK = "صحبت";
    public static final String P_MIRROR = "نگاه به آینه";
    public static final String P_RADIO = "روشن کردن رادیو";
    public static final String P_ALTAR = "محراب";
    public static final String P_GRAVE = "کندن قبر";
    public static final String P_LOOT = "تفتیش جسد";
    public static final String P_CAMERA = "عکس گرفتن";
    public static final String P_EXIT = "فرار از دره";
    public static final String P_AXE_NEEDED = "تبر لازم است";
    public static final String INV_FULL = "کوله‌پشتی پر است!";
    public static final String SAVED_OK = "بازی ذخیره شد";
    public static final String OBJECTIVE = "هدف";

    // ---------------- items ----------------
    public static final HashMap<Integer, String> ITEM_NAME = new HashMap<Integer, String>();
    public static final HashMap<Integer, String> ITEM_DESC = new HashMap<Integer, String>();
    static {
        ITEM_NAME.put(World.IT_BATTERY, "باتری");
        ITEM_DESC.put(World.IT_BATTERY, "برای چراغ‌قوه. ذخیرهٔ نور در تاریکی.");
        ITEM_NAME.put(World.IT_BANDAGE, "بانداژ");
        ITEM_DESC.put(World.IT_BANDAGE, "خون‌ریزی را متوقف و کمی سلامتی برگردانده می‌کند.");
        ITEM_NAME.put(World.IT_COIN, "سکهٔ قدیمی");
        ITEM_DESC.put(World.IT_COIN, "ارز فروشندهٔ مرموز.");
        ITEM_NAME.put(World.IT_AMMO, "فشنگ");
        ITEM_DESC.put(World.IT_AMMO, "برای اسلحه. هر گلوله یک شانس دیگر است.");
        ITEM_NAME.put(World.IT_FILM, "فیلم عکاسی");
        ITEM_DESC.put(World.IT_FILM, "برای دوربین قدیمی؛ آنچه پنهان است را نشان می‌دهد.");
        ITEM_NAME.put(World.IT_TALISMAN, "طلسم");
        ITEM_DESC.put(World.IT_TALISMAN, "طلسم کهن. سه تایش لازم است.");
        ITEM_NAME.put(World.IT_KEY_IRON, "کلید آهنی");
        ITEM_DESC.put(World.IT_KEY_IRON, "دروازهٔ آهنی حیاط عمارت را باز می‌کند.");
        ITEM_NAME.put(World.IT_KEY_MANSION, "کلید عمارت");
        ITEM_DESC.put(World.IT_KEY_MANSION, "درِ چوبی سنگین عمارت.");
        ITEM_NAME.put(World.IT_AXE, "تبر آتش‌نشانی");
        ITEM_DESC.put(World.IT_AXE, "درهای تخته‌شده را می‌شکند و سلاحی مرگبار است.");
        ITEM_NAME.put(World.IT_REVOLVER, "سسور");
        ITEM_DESC.put(World.IT_REVOLVER, "سلاح گرم قدیمی. صدایش همه را خبر می‌کند.");
        ITEM_NAME.put(World.IT_NOTE, "یادداشت");
        ITEM_DESC.put(World.IT_NOTE, "کاغذی زرد و پاره.");
    }

    // ---------------- notes ----------------
    public static final String[] NOTE_TITLES = {
            "یادداشتِ پریشانی", "مردِ چوب‌دستی", "سنگ‌نبشهٔ عمارت", "دفترخاطرات مادر",
            "آیینِ محراب", "کتابخانهٔ خاموش", "نامهٔ سحر", "روزنامهٔ کهنه"
    };
    public static final String[] NOTE_TEXTS = {
            // 0 — house2
            "…او را به سمت عمارت بردند. صدای جیغش تا مزرعه آمد و بعد سکوت.\n"
            + "دهکده به من گفت ساکت باشم. می‌گویند «مادر» آن بالا بیدار است و بچه‌ها را می‌خواهد.\n"
            + "من ساکت نمی‌مانم. فردا با کلید آهنی پدربزرگ به حیاط می‌روم.",
            // 1 — courtyard
            "مردی با چوب‌دستی از دروازهٔ آهنی بیرون آمد و به من گفت: «برگرد.»\n"
            + "چهره‌اش را در تاریکی ندیدم ولی صدایش مثل زمین بود؛ مثل چیزهایی که دفن شده‌اند.\n"
            + "روی دروازه نوشته بود: تبر با تو بیا.",
            // 2 — hall
            "این عمارت در سالِ ۱۳۲۴ بر پا شد، بر زمینی که قبلش هیچ‌وقت صاحبی نداشت.\n"
            + "هفت خانواده آمدند و هفت خانواده در یک زمستان رفتند.\n"
            + "تنها چیزی که ماند، صدای لالایی در اتاق شمالی بود.",
            // 3 — bedroom (code)
            "مادر در آینه زندگی می‌کند. مستقیم نگاهش نکن؛ تو را با خودش می‌برد.\n"
            + "اگر روزی خواستی از دره بگریزی، دروازهٔ جنوبی رمز دارد:\n"
            + "رمز سالِ رفتنِ مادر است: ۴۹۱۳",
            // 4 — ritual room
            "سه طلسم. یکی زیر نور کتاب‌ها، یکی جایی که خواب می‌بینی، یکی پای پاهای خونین.\n"
            + "هر سه را به محراب ببر و انتخاب کن: بسوزان تا مادر آرام بگیرد، یا نگه‌دار تا او با تو حرف بزند.\n"
            + "ولی حواست باشد: او پیمان‌شکن را می‌بخشد، فرارکننده را نه.",
            // 5 — library
            "کتاب‌ها همه یک کلمه را تکرار می‌کنند: «توخالی».\n"
            + "پشت قفسه‌ها صدای نفس می‌آید. شاید کتاب‌ها نفس می‌کشند، شاید چیزِ پشت آن‌ها.\n"
            + "به قفسه‌ها تکیه نده. هرگز.",
            // 6 — house1 (sister)
            "سحر جان، اگر این نامه را پیدا کردی یعنی من زودتر رفتم.\n"
            + "چراغ‌قوه را برداشتم، تو در خانه بمون. صدای زنگِ لب رودخانه نیفتی.\n"
            + "قول بده نفتی. قول بده دنبالم نیای. — داداش",
            // 7 — house3
            "روزنامهٔ ۲۸ آبان ۱۳۲۴: برای سومین بار در این زمستان، کودکی از دهکدهٔ درهٔ توخالی ناپدید شد.\n"
            + "مأموران از عمارت بالای تپه بازدید کردند و «چیزی که باید دیده می‌شد» را ندیدند.\n"
            + "جست‌وجو متوقف شد.",
    };
    public static final String NOTE_CODE = "4913";

    // ---------------- quests ----------------
    public static final String[] QUEST_TITLES = {
            "در جست‌وجوی سحر",
            "دروازهٔ آهنی",
            "تالار عمارت",
            "سه طلسم",
            "رمز دروازهٔ جنوبی",
            "تصمیم در محراب",
            "فرار از دره"
    };
    public static final String[] QUEST_DESCS = {
            "دهکده را بگرد و سرنخی از خواهرت پیدا کن.",
            "کلید آهنی را در قبرستان پیدا کن و وارد حیاط عمارت شو.",
            "کلید عمارت را پیدا کن و وارد تالار شو.",
            "سه طلسم را در عمارت پیدا کن.",
            "رمز دروازهٔ جنوبی را از نوشته‌ها پیدا کن.",
            "به محراب برو و سرنوشت مادر را انتخاب کن… یا راه فرار را برگزین.",
            "خودت را به دروازهٔ جنوبی برسان و از دره بیرون برو."
    };

    // ---------------- dialogue ----------------
    public static final String MERCHANT_NAME = "فروشندهٔ مرموز";
    public static final String MERCHANT_HELLO =
            "چراغش را کم کن… سوت و کور نمی‌شود اینجا، ولی نباید دیدم را زیاد کرد.\n"
            + "کالا دارم؛ سکه می‌گیرم. گیر آوردنش با خودت.";
    public static final String[] MERCHANT_OPTIONS = {"باتری (۲ سکه)", "بانداژ (۱ سکه)", "فشنگ (۲ سکه)", "فیلم (۲ سکه)", "رفتن"};
    public static final String MERCHANT_BYE = "جاده را بگیر… و به هیچ‌کس نگو مرا دیدی.";
    public static final String MERCHANT_NO_COIN = "سکه نداری، خرید نداری. اینجا همه‌چیز با سکه است.";
    public static final String MERCHANT_GONE = "فروشنده رفته است؛ فقط جای چراغش گرم بود.";
    public static final String RADIO_ON =
            "«…اگر کسی این پیام را می‌شنود، به رودخانه نزدیک نشوید. آن‌ها صدای آب را عاشقانه می‌شنوند…»\n"
            + "«…عمارت را ترک کنید. مادر بیدار است. مادر بیدار است. مادر بید—»";
    public static final String MIRROR_SEEN =
            "در آینه، زنی با لباس سفید پشت سرت ایستاده بود…\n"
            + "برگردی — هیچ‌کس نبود. فقط لکهٔ سردی روی شیشه ماند.";
    public static final String[] MOTHER_LINES = {
            "«تو بوی خونِ برادرم را می‌دهی…»",
            "«بیا بالا، شام سرد شده…»",
            "«همهٔ بچه‌ها به خانه برمی‌گردند.»",
            "«چرا با آن چراغ نگاهم می‌کنی؟»",
            "«دره تنهاییت را دوست ندارد.»"
    };
    public static final String[] WHISPER_LINES = {
            "…برگرد…", "…پایینِ پله…", "…نفسش را بشنوی؟…", "…درها باز است…", "…او پشتِ توست…"
    };

    // ---------------- events / endings ----------------
    public static final String INTRO_TEXTS = "زمستان ۱۳۲۴ — دهکدهٔ درهٔ توخالی|"
            + "خواهرت سحر سه روز است گم شده و آخرین نشانی‌اش به عمارت بالای تپه می‌رسد.|"
            + "چراغ‌قوه را بردار. دهکده خالی است و چیزی در مه نفس می‌کشد.";
    public static final String STRUGGLE_HINT = "سریع دکمهٔ تعامل را لمس کن تا رها شوی!";
    public static final String STRUGGLE_HINT2 = "سریع لمس کن تا رها شوی!";
    public static final String DEATH_TEXT = "مادر تو را به خانه برد.\nدره یکی دیگر شد.";
    public static final String[] ENDING_TITLES = {
            "پایان: فرار", "پایان: رهایی", "پایان: خانهٔ مادر", "پایان: تاریکی"
    };
    public static final String[] ENDING_TEXTS = {
            "رمز را زدی و دروازه زیر فشارش باز شد.\n"
            + "پشت سر، صدای لالایی تا دروازه آمد و بعد، مثل همیشه، سکوت.\n"
            + "تو از دره بیرون آمدی — ولی دره همیشه صدایت را می‌زند.",
            "طلسم‌ها در آتش محراب چروک شدند و صدای جیغی از دیوارها بلند شد؛ صدایی که مثل مادر گریه می‌کرد.\n"
            + "آینه‌ها ترکیدند، مه فرو نشست و برای اولین بار در سه روز، سکوتِ دهکده سکوتِ آرامش بود.",
            "طلسم‌ها را نگه داشتی و مادر آمد. دستانش سرد بود، ولی لالایی‌اش گرم.\n"
            + "حالا سحر اینجاست، و تو هم. خانواده دوباره کامل شد.\n"
            + "درهٔ توخالی دیگر توخالی نیست.",
            "تاریکی تو را خورد. هیچ پایان دیگری نماند.\n"
            + "شاید بار بعد…"
    };
    public static final String BANISH_DONE = "طلسم‌ها سوختند. مادر دیگر در دیوارها نیست…";

    // ---------------- achievements ----------------
    public static final String[] ACH_NAMES = {
            "قدم اول", "کتاب‌خوان", "کلید‌به‌دست", "طلسم‌شکن", "پشت‌خنجری", "تیرباران",
            "عکاس مرگ", "بی‌نور", "گنجور", "محراب‌رو", "فراری", "آزادکننده", "خانه‌نشین", "بی‌مهربان"
    };
    public static final String[] ACH_DESCS = {
            "اولین قدمت را در دره بردار.",
            "هر ۸ یادداشت را پیدا کن.",
            "کلید آهنی را به دست بیاور.",
            "هر ۳ طلسم را جمع کن.",
            "با حملهٔ غافلگیرانه شکارچی را بکش.",
            "شکارچی را با سسور از پای درآور.",
            "با دوربین، مادر را برای یک لحظه زمین‌گیر کن.",
            "۱۰ دقیقه بدون چراغ‌قوه زنده بمان.",
            "۱۰ سکهٔ قدیمی جمع کن.",
            "به محراب برس.",
            "با پایان «فرار» بازی را تمام کن.",
            "با پایان «رهایی» بازی را تمام کن.",
            "با پایان «خانهٔ مادر» بازی را تمام کن.",
            "بدون هیچ مرگی به پایان برس."
    };
    public static final int ACH_COUNT = 14;

    // ---------------- credits ----------------
    public static final String CREDITS =
            "HOLLOW VALE — درهٔ توخالی\n\n"
            + "موتور بازی: Raycast DDA اختصاصی + GLES2\n"
            + "گرافیک: سبک PS1 — بافت‌های رویه‌ای، دانهٔ فیلم، دیترِ باوِر\n"
            + "صدا: سنتز کامل رویه‌ای\n"
            + "فیلم‌های میان‌پرده: رندر رویه‌ای\n\n"
            + "طراحی و برنامه‌نویسی: Z.ai Studio\n"
            + "نسخه ۴.۰ — ۲۰۲۶\n\n"
            + "با تشکر از اینکه به دره اعتماد کردی…\n"
            + "ما هم به تو اعتماد کردیم.";

    private Str() { }
}
