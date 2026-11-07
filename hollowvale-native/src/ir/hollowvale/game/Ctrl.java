package ir.hollowvale.game;

/** Per-frame controller state produced by the input layer. */
public class Ctrl {
    public double fwd, strafe, lookDX;
    public boolean run, sneak;
    public boolean useEdge, useHeld, lightEdge, mapEdge, tasksEdge;

    public void clearEdges() { useEdge = false; lightEdge = false; mapEdge = false; tasksEdge = false; }
    public void reset() { fwd = 0; strafe = 0; lookDX = 0; run = false; clearEdges(); }
}
