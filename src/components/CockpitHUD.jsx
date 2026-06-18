import { useEffect, useState } from "react";

/**
 * Cockpit HUD permanent.
 * - Vignette + scanlines + sweep CRT
 * - Coins angulaires + cadre
 * - Crosshair central très discret
 * - Readouts dynamiques aux 4 coins (BATT, ALT, GPS, SECTION, FPS, REC)
 * - Échelle d'altitude verticale, indicateur d'horizon
 */
export default function CockpitHUD({ activeSection }) {
  const [scrollY, setScrollY] = useState(0);
  const [batt, setBatt] = useState(98);
  const [fps, setFps] = useState(120);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Batt qui descend très lentement (effet "vrai vol")
  useEffect(() => {
    const id = setInterval(() => {
      setBatt((b) => (b > 64 ? b - 1 : 99));
    }, 11000);
    return () => clearInterval(id);
  }, []);

  // FPS qui fluctue légèrement
  useEffect(() => {
    const id = setInterval(() => {
      setFps(118 + Math.floor(Math.random() * 6));
    }, 800);
    return () => clearInterval(id);
  }, []);

  // Horloge
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const altitude = Math.floor(scrollY / 4 + 120);

  // Pseudo-coordonnées GPS qui dérivent selon le scroll (effet de vol)
  const lat = (43.7102 + scrollY / 80000).toFixed(4);
  const lng = (7.262 + scrollY / 95000).toFixed(4);

  const hh = String(time.getHours()).padStart(2, "0");
  const mm = String(time.getMinutes()).padStart(2, "0");
  const ss = String(time.getSeconds()).padStart(2, "0");

  const battClass = batt < 70 ? "value warn" : "value";

  const altSteps = [altitude + 80, altitude + 40, altitude, altitude - 40, altitude - 80];

  return (
    <div className="cockpit" aria-hidden="true">
      <div className="cockpit-vignette" />
      <div className="cockpit-scanlines" />
      <div className="cockpit-scan-sweep" />

      <div className="hud-frame">
        <span className="hud-corner tl" />
        <span className="hud-corner tr" />
        <span className="hud-corner bl" />
        <span className="hud-corner br" />
      </div>

      <div className="hud-crosshair" />

      {/* Coin TL : identification du pilote */}
      <div className="hud-readout tl">
        <div>
          <span className="label">PILOT </span>
          <span className="value">WAEL.LABIDI</span>
        </div>
        <div>
          <span className="label">CALLSIGN </span>
          <span className="value">NIC-25-FPV</span>
        </div>
        <div>
          <span className="label">MODE </span>
          <span className="value">RECON</span>
        </div>
      </div>

      {/* Coin TR : batterie / FPS / REC */}
      <div className="hud-readout tr">
        <div>
          <span className="label">BATT </span>
          <span className={battClass}>{batt}%</span>
        </div>
        <div>
          <span className="label">FPS </span>
          <span className="value">{fps}</span>
        </div>
        <div>
          <span className="hud-rec">REC</span>
        </div>
      </div>

      {/* Coin BL : section courante */}
      <div className="hud-readout bl">
        <div>
          <span className="label">SECTOR </span>
          <span className="value">{activeSection.toUpperCase()}</span>
        </div>
        <div>
          <span className="label">SIGNAL </span>
          <span className="value">▮▮▮▮▮ 100%</span>
        </div>
      </div>

      {/* Coin BR : GPS + heure */}
      <div className="hud-readout br">
        <div>
          <span className="label">GPS </span>
          <span className="value">
            {lat}N · {lng}E
          </span>
        </div>
        <div>
          <span className="label">UTC </span>
          <span className="value">
            {hh}:{mm}:{ss}
          </span>
        </div>
      </div>

      {/* Échelle altitude */}
      <div className="hud-altitude">
        {altSteps.map((v, i) => (
          <span key={i} className={i === 2 ? "alt-current" : ""}>
            {String(v).padStart(4, "0")}M
          </span>
        ))}
      </div>

      {/* Horizon artificiel */}
      <div className="hud-horizon" />
    </div>
  );
}
