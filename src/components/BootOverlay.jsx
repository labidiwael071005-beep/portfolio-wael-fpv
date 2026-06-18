import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Petit écran de boot (~1.6s) au tout premier chargement : pose l'ambiance FPV
 * sans bloquer l'utilisateur longtemps. Skip-able au clic.
 */
export default function BootOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="boot"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => setVisible(false)}
        >
          <div>FPV LINK INITIALIZING…</div>
          <div className="boot-bar" />
          <div className="boot-lines">
            <div>VTX CHANNEL · R5 · 5865MHz · OK</div>
            <div>RX TELEMETRY · ELRS · 2.4GHz · OK</div>
            <div>GPS LOCK · 12 SATS · OK</div>
            <div>PILOT WAEL.LABIDI · READY</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
