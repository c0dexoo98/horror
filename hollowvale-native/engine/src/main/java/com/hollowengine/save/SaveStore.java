package com.hollowengine.save;

import android.content.Context;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.charset.StandardCharsets;

/**
 * HollowEngine — tiny save/setting store: named UTF-8 files under files/<dir>/.
 * Pure string IO; the host decides the format (JSON, binary-as-text, whatever).
 */
public final class SaveStore {
    private final File dir;

    public SaveStore(Context c) {
        this(c, "saves");
    }

    public SaveStore(Context c, String dirName) {
        dir = new File(c.getFilesDir(), dirName);
        if (!dir.exists()) dir.mkdirs();
    }

    public File dir() { return dir; }

    public File file(String name) {
        return new File(dir, name);
    }

    public boolean write(String name, String data) {
        FileOutputStream fo = null;
        try {
            fo = new FileOutputStream(file(name));
            fo.write(data.getBytes(StandardCharsets.UTF_8));
            fo.close();
            return true;
        } catch (Throwable t) {
            try {
                if (fo != null) fo.close();
            } catch (Throwable ignored) {
            }
            return false;
        }
    }

    /** null when missing. */
    public String read(String name) {
        try {
            File f = file(name);
            if (!f.exists()) return null;
            FileInputStream fi = new FileInputStream(f);
            byte[] b = new byte[(int) f.length()];
            int off = 0;
            while (off < b.length) {
                int n = fi.read(b, off, b.length - off);
                if (n < 0) break;
                off += n;
            }
            fi.close();
            return new String(b, 0, off, StandardCharsets.UTF_8);
        } catch (Throwable t) {
            return null;
        }
    }

    public boolean exists(String name) {
        File f = file(name);
        return f.exists() && f.length() > 0;
    }

    public boolean delete(String name) {
        try {
            return file(name).delete();
        } catch (Throwable t) {
            return false;
        }
    }

    public String[] list() {
        String[] out = dir.list();
        return out == null ? new String[0] : out;
    }
}
