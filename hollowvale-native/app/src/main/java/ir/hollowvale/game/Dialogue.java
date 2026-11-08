package ir.hollowvale.game;

/** HOLLOW VALE v4 — dialogue box state (option-based branching). */
public final class Dialogue {
    public String speaker;
    public String text;
    public String[] options;   // may be null → single "continue" (تایید)
    public int kind;           // DLG_INFO, DLG_MERCHANT, DLG_ALTAR

    public static final int DLG_INFO = 0;
    public static final int DLG_MERCHANT = 1;
    public static final int DLG_ALTAR = 2;

    public Dialogue(String speaker, String text, String[] options, int kind) {
        this.speaker = speaker;
        this.text = text;
        this.options = options;
        this.kind = kind;
    }

    public static Dialogue info(String speaker, String text) {
        return new Dialogue(speaker, text, null, DLG_INFO);
    }
}
