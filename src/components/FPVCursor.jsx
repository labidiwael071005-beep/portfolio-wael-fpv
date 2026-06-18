import { useEffect, useRef, useState } from "react";

/**
 * Curseur FPV : un viseur SVG qui suit la souris avec un léger lag,
 * et passe en mode LOCK (rouge + label) au survol d'éléments interactifs.
 */
export default function FPVCursor() {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const target = useRef({ x: -200, y: -200 });
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onOver = (e) => {
      const el = e.target;
      if (!(el instanceof Element)) return;
      const interactive = el.closest("a, button, [data-cursor='lock']");
      if (interactive) {
        setLocked(true);
        if (labelRef.current) {
          const txt =
            interactive.getAttribute("data-lock-label") ||
            (interactive.tagName === "A" ? "VISER · LINK" : "VISER · ACTION");
          labelRef.current.textContent = txt;
          labelRef.current.classList.add("visible");
        }
      } else {
        setLocked(false);
        if (labelRef.current) labelRef.current.classList.remove("visible");
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    let raf;
    const tick = () => {
      // léger lag (lerp 0.22) pour l'effet drone qui rattrape la trajectoire
      pos.current.x += (target.current.x - pos.current.x) * 0.22;
      pos.current.y += (target.current.y - pos.current.y) * 0.22;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${target.current.x + 24}px, ${
          target.current.y + 24
        }px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`fpv-cursor ${locked ? "lock" : ""}`} aria-hidden="true">
        <svg viewBox="0 0 100 100">
          {/* Cercle externe */}
          <circle className="ring" cx="50" cy="50" r="40" />
          {/* Petits ticks orientés N/S/E/O */}
          <line className="tick" x1="50" y1="2" x2="50" y2="14" />
          <line className="tick" x1="50" y1="86" x2="50" y2="98" />
          <line className="tick" x1="2" y1="50" x2="14" y2="50" />
          <line className="tick" x1="86" y1="50" x2="98" y2="50" />
          {/* Centre */}
          <circle className="center-dot" cx="50" cy="50" r="2.5" />
          {/* Cercle intérieur (apparaît en lock) */}
          {locked && <circle className="ring" cx="50" cy="50" r="22" />}
        </svg>
      </div>
      <div ref={labelRef} className="fpv-cursor-label" aria-hidden="true" />
    </>
  );
}
