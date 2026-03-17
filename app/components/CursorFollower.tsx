"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./CursorFollower.module.css";

type Point = { x: number; y: number };

type CursorFollowerProps = {
  disableBelowPx?: number;
};

function isTouchOrCoarsePointer(): boolean {
  if (typeof window === "undefined") return true;
  return (
    "ontouchstart" in window ||
    (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) ||
    (typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches)
  );
}

function isInteractive(el: Element | null): boolean {
  if (!el) return false;
  const target = el.closest(
    "a, button, [role='button'], input, textarea, select, summary, label, [data-cursor='interactive']"
  );
  if (!target) return false;
  const asHtml = target as HTMLElement;
  if (asHtml.hasAttribute("disabled")) return false;
  return true;
}

export function CursorFollower({ disableBelowPx = 1024 }: CursorFollowerProps) {
  const rafRef = useRef<number | null>(null);
  const mouseRef = useRef<Point>({ x: 0, y: 0 });
  const cursorRef = useRef<Point>({ x: 0, y: 0 });
  const trailRef = useRef<Point>({ x: 0, y: 0 });
  const cursorScaleRef = useRef(1);
  const trailScaleRef = useRef(1);

  const cursorEl = useRef<HTMLDivElement | null>(null);
  const trailEl = useRef<HTMLDivElement | null>(null);

  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const visibleRef = useRef(false);

  const stateRef = useRef({
    hovering: false,
    down: false,
  });

  const factors = useMemo(
    () => ({
      cursorFollow: 0.22,
      trailFollow: 0.12,
      scaleFollow: 0.18,
    }),
    []
  );

  useEffect(() => {
    function computeEnabled() {
      if (typeof window === "undefined") return false;
      if (isTouchOrCoarsePointer()) return false;
      if (window.innerWidth < disableBelowPx) return false;
      return true;
    }

    function onResize() {
      setEnabled(computeEnabled());
    }

    setEnabled(computeEnabled());
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, [disableBelowPx]);

  useEffect(() => {
    if (!enabled) {
      document.body.classList.remove("cursorHidden");
      setVisible(false);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      return;
    }

    document.body.classList.add("cursorHidden");

    const onMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }

      const hovering = isInteractive(e.target as Element | null);
      if (stateRef.current.hovering !== hovering) stateRef.current.hovering = hovering;
    };

    const onDown = () => {
      stateRef.current.down = true;
    };

    const onUp = () => {
      stateRef.current.down = false;
    };

    const onLeave = () => {
      setVisible(false);
      visibleRef.current = false;
      stateRef.current.hovering = false;
      stateRef.current.down = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    const tick = () => {
      const mouse = mouseRef.current;

      cursorRef.current.x += (mouse.x - cursorRef.current.x) * factors.cursorFollow;
      cursorRef.current.y += (mouse.y - cursorRef.current.y) * factors.cursorFollow;

      trailRef.current.x += (mouse.x - trailRef.current.x) * factors.trailFollow;
      trailRef.current.y += (mouse.y - trailRef.current.y) * factors.trailFollow;

      const hovering = stateRef.current.hovering;
      const down = stateRef.current.down;

      const targetCursorScale = down ? 0.82 : hovering ? 1.9 : 1;
      const targetTrailScale = down ? 0.88 : hovering ? 1.28 : 1;

      cursorScaleRef.current += (targetCursorScale - cursorScaleRef.current) * factors.scaleFollow;
      trailScaleRef.current += (targetTrailScale - trailScaleRef.current) * factors.scaleFollow;

      const cursorScale = cursorScaleRef.current;
      const trailScale = trailScaleRef.current;

      if (cursorEl.current) {
        cursorEl.current.style.transform = `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0) translate3d(-50%, -50%, 0) scale(${cursorScale})`;
        cursorEl.current.style.opacity = visibleRef.current ? "1" : "0";
      }

      if (trailEl.current) {
        trailEl.current.style.transform = `translate3d(${trailRef.current.x}px, ${trailRef.current.y}px, 0) translate3d(-50%, -50%, 0) scale(${trailScale})`;
        trailEl.current.style.opacity = visibleRef.current ? "1" : "0";
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onLeave);

      document.body.classList.remove("cursorHidden");

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;

      if (cursorEl.current) cursorEl.current.style.transform = "";
      if (trailEl.current) trailEl.current.style.transform = "";
      cursorScaleRef.current = 1;
      trailScaleRef.current = 1;
    };
  }, [enabled, factors.cursorFollow, factors.trailFollow, factors.scaleFollow]);

  if (!enabled) return null;

  return (
    <div className={styles.root} aria-hidden="true">
      <div ref={trailEl} className={`${styles.trail} ${visible ? "" : styles.hidden}`} />
      <div ref={cursorEl} className={`${styles.cursor} ${visible ? "" : styles.hidden}`} />
    </div>
  );
}
