package com.hollowengine.core;

import java.util.ArrayList;
import java.util.List;

/**
 * HollowEngine — classic finite-state machine (AI states, UI screens, game phases).
 * States are lightweight int ids mapped by a resolver the host supplies.
 */
public class StateMachine {
    /** maps a state id to its behaviour hooks. */
    public interface Resolver {
        void onEnter(int state, int prevState);

        void onExit(int state, int nextState);

        /** returns the next state id, or the same id to stay. */
        int update(int state, float dt);
    }

    private final Resolver resolver;
    private final List<Integer> history = new ArrayList<Integer>();
    private int current;
    private float timeInState;

    public StateMachine(int initialState, Resolver resolver) {
        this.resolver = resolver;
        this.current = initialState;
        this.timeInState = 0;
        // formally enter the initial state so counters/animation hooks run
        resolver.onEnter(initialState, -1);
    }

    public int state() { return current; }

    public float timeInState() { return timeInState; }

    public void change(int next) {
        if (next == current) return;
        int prev = current;
        resolver.onExit(prev, next);
        current = next;
        timeInState = 0;
        history.add(prev);
        if (history.size() > 16) history.remove(0);
        resolver.onEnter(next, prev);
    }

    public void update(float dt) {
        timeInState += dt;
        int next = resolver.update(current, dt);
        if (next != current) change(next);
    }

    /** previous state or -1. */
    public int previous() {
        return history.isEmpty() ? -1 : history.get(history.size() - 1);
    }
}
