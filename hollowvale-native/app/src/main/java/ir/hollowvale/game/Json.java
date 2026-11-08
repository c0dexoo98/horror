package ir.hollowvale.game;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/** HOLLOW VALE v4 — tiny JSON reader/writer (pure JVM, no Android). */
public final class Json {

    // ---------------- writer ----------------
    public static String str(String s) {
        if (s == null) return "\"\"";
        StringBuilder b = new StringBuilder("\"");
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            switch (c) {
                case '"': b.append("\\\""); break;
                case '\\': b.append("\\\\"); break;
                case '\n': b.append("\\n"); break;
                case '\r': b.append("\\r"); break;
                case '\t': b.append("\\t"); break;
                default:
                    if (c < 0x20) b.append(String.format("\\u%04x", (int) c));
                    else b.append(c);
            }
        }
        b.append("\"");
        return b.toString();
    }

    /** Serialize a value: Map<String,Object>, List<Object>, String, Double/Float/Integer/Long, Boolean, null. */
    @SuppressWarnings("unchecked")
    public static String write(Object v) {
        if (v == null) return "null";
        if (v instanceof String) return str((String) v);
        if (v instanceof Boolean) return v.toString();
        if (v instanceof Number) {
            double d = ((Number) v).doubleValue();
            if (d == Math.rint(d) && !(v instanceof Double || v instanceof Float) && Math.abs(d) < 1e15)
                return String.valueOf(((Number) v).longValue());
            if (Double.isNaN(d) || Double.isInfinite(d)) return "0";
            return String.valueOf(d);
        }
        if (v instanceof Map) {
            StringBuilder b = new StringBuilder("{");
            Map<String, Object> m = (Map<String, Object>) v;
            boolean first = true;
            for (Map.Entry<String, Object> e : m.entrySet()) {
                if (!first) b.append(",");
                first = false;
                b.append(str(e.getKey())).append(":").append(write(e.getValue()));
            }
            return b.append("}").toString();
        }
        if (v instanceof Object[]) {
            Object[] a = (Object[]) v;
            StringBuilder b = new StringBuilder("[");
            for (int i = 0; i < a.length; i++) {
                if (i > 0) b.append(",");
                b.append(write(a[i]));
            }
            return b.append("]").toString();
        }
        if (v instanceof List) {
            StringBuilder b = new StringBuilder("[");
            List<Object> l = (List<Object>) v;
            for (int i = 0; i < l.size(); i++) {
                if (i > 0) b.append(",");
                b.append(write(l.get(i)));
            }
            return b.append("]").toString();
        }
        return "null";
    }

    // ---------------- reader ----------------
    public static Object read(String s) {
        P p = new P(s);
        p.ws();
        Object v = p.value();
        return v;
    }

    public static Map<String, Object> readObj(String s) {
        Object o = read(s);
        return o instanceof Map ? (Map<String, Object>) o : new HashMap<String, Object>();
    }

    private static final class P {
        final String s;
        int i;

        P(String s) { this.s = s == null ? "" : s; }

        void ws() {
            while (i < s.length() && Character.isWhitespace(s.charAt(i))) i++;
        }

        char peek() { return i < s.length() ? s.charAt(i) : '\0'; }

        Object value() {
            ws();
            char c = peek();
            if (c == '{') return obj();
            if (c == '[') return arr();
            if (c == '"') return string();
            if (c == 't') { i += 4; return Boolean.TRUE; }
            if (c == 'f') { i += 5; return Boolean.FALSE; }
            if (c == 'n') { i += 4; return null; }
            return number();
        }

        Map<String, Object> obj() {
            Map<String, Object> m = new HashMap<String, Object>();
            i++; // {
            ws();
            if (peek() == '}') { i++; return m; }
            while (i < s.length()) {
                ws();
                String k = string();
                ws();
                if (peek() == ':') i++;
                m.put(k, value());
                ws();
                char c = peek();
                i++;
                if (c == '}') break;
                if (c != ',') break;
            }
            return m;
        }

        List<Object> arr() {
            List<Object> l = new ArrayList<Object>();
            i++; // [
            ws();
            if (peek() == ']') { i++; return l; }
            while (i < s.length()) {
                l.add(value());
                ws();
                char c = peek();
                i++;
                if (c == ']') break;
                if (c != ',') break;
            }
            return l;
        }

        String string() {
            StringBuilder b = new StringBuilder();
            i++; // "
            while (i < s.length()) {
                char c = s.charAt(i++);
                if (c == '"') break;
                if (c == '\\' && i < s.length()) {
                    char e = s.charAt(i++);
                    switch (e) {
                        case 'n': b.append('\n'); break;
                        case 'r': b.append('\r'); break;
                        case 't': b.append('\t'); break;
                        case 'b': b.append('\b'); break;
                        case 'f': b.append('\f'); break;
                        case 'u':
                            if (i + 4 <= s.length()) {
                                b.append((char) Integer.parseInt(s.substring(i, i + 4), 16));
                                i += 4;
                            }
                            break;
                        default: b.append(e);
                    }
                } else b.append(c);
            }
            return b.toString();
        }

        Object number() {
            int st = i;
            while (i < s.length() && "+-0123456789.eE".indexOf(s.charAt(i)) >= 0) i++;
            String t = s.substring(st, i);
            if (t.isEmpty()) return Double.valueOf(0);
            if (t.indexOf('.') < 0 && t.indexOf('e') < 0 && t.indexOf('E') < 0) {
                try { return Long.valueOf(t); } catch (NumberFormatException ignored) { }
            }
            try { return Double.valueOf(t); } catch (NumberFormatException ignored) {
                return Double.valueOf(0);
            }
        }
    }

    // convenience accessors
    public static double num(Object o, double def) {
        if (o instanceof Number) return ((Number) o).doubleValue();
        return def;
    }

    public static int intOf(Object o, int def) { return (int) num(o, def); }

    public static String strOf(Object o, String def) {
        return o instanceof String ? (String) o : def;
    }

    public static boolean boolOf(Object o, boolean def) {
        if (o instanceof Boolean) return (Boolean) o;
        if (o instanceof Number) return ((Number) o).doubleValue() != 0;
        return def;
    }

    @SuppressWarnings("unchecked")
    public static List<Object> listOf(Object o) {
        if (o instanceof List) return (List<Object>) o;
        return new ArrayList<Object>();
    }

    private Json() { }
}
