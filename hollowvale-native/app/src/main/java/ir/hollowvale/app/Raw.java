package ir.hollowvale.app;

import android.content.Context;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

/** HOLLOW VALE v4 — raw resource text reader (shaders). */
public final class Raw {
    public static String read(Context c, int resId) {
        try {
            InputStream in = c.getResources().openRawResource(resId);
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            byte[] b = new byte[4096];
            int n;
            while ((n = in.read(b)) > 0) out.write(b, 0, n);
            in.close();
            return new String(out.toByteArray(), StandardCharsets.UTF_8);
        } catch (Throwable t) {
            return "void main(){}";
        }
    }

    private Raw() { }
}
