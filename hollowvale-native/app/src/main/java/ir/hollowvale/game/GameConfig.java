package ir.hollowvale.game;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/** HOLLOW VALE v4 — player/graphics settings (serializable via Json). */
public final class GameConfig {
    public float sens = 1.0f;          // look sensitivity
    public float volMaster = 1.0f;
    public float volMusic = 0.8f;
    public float volSfx = 1.0f;
    public int quality = 1;            // 0 low, 1 med, 2 high
    public boolean fog = true;
    public boolean grain = true;
    public boolean invertLook = false;
    public boolean vibrate = true;
    public boolean showFps = false;

    /** button layout: name → [x,y,size,alpha] in screen fractions. null = default. */
    public Map<String, float[]> buttons = new HashMap<String, float[]>();

    public Map<String, Object> toMap() {
        Map<String, Object> m = new HashMap<String, Object>();
        m.put("sens", (double) sens);
        m.put("vm", (double) volMaster);
        m.put("mu", (double) volMusic);
        m.put("sx", (double) volSfx);
        m.put("q", (double) quality);
        m.put("fog", fog);
        m.put("grain", grain);
        m.put("inv", invertLook);
        m.put("vib", vibrate);
        m.put("fps", showFps);
        if (!buttons.isEmpty()) {
            Map<String, Object> b = new HashMap<String, Object>();
            for (Map.Entry<String, float[]> e : buttons.entrySet()) {
                float[] a = e.getValue();
                b.put(e.getKey(), new Object[]{(double) a[0], (double) a[1], (double) a[2], (double) a[3]});
            }
            m.put("btns", b);
        }
        return m;
    }

    @SuppressWarnings("unchecked")
    public void fromMap(Map<String, Object> m) {
        if (m == null) return;
        sens = (float) Json.num(m.get("sens"), sens);
        volMaster = (float) Json.num(m.get("vm"), volMaster);
        volMusic = (float) Json.num(m.get("mu"), volMusic);
        volSfx = (float) Json.num(m.get("sx"), volSfx);
        quality = Json.intOf(m.get("q"), quality);
        fog = Json.boolOf(m.get("fog"), fog);
        grain = Json.boolOf(m.get("grain"), grain);
        invertLook = Json.boolOf(m.get("inv"), invertLook);
        vibrate = Json.boolOf(m.get("vib"), vibrate);
        showFps = Json.boolOf(m.get("fps"), showFps);
        sens = Math.max(0.2f, Math.min(3f, sens));
        quality = Math.max(0, Math.min(2, quality));
        Object b = m.get("btns");
        if (b instanceof Map) {
            buttons.clear();
            for (Map.Entry<String, Object> e : ((Map<String, Object>) b).entrySet()) {
                List<Object> a = Json.listOf(e.getValue());
                if (a.size() >= 4) {
                    buttons.put(e.getKey(), new float[]{
                            (float) Json.num(a.get(0), 0.5f), (float) Json.num(a.get(1), 0.5f),
                            (float) Json.num(a.get(2), 1f), (float) Json.num(a.get(3), 1f)});
                }
            }
        }
    }

    public String serialize() { return Json.write(toMap()); }

    public void deserialize(String s) { fromMap(Json.readObj(s)); }

    /** internal render height by quality. */
    public int renderHeight() {
        switch (quality) {
            case 0: return 200;
            case 2: return 360;
            default: return 272;
        }
    }
}
