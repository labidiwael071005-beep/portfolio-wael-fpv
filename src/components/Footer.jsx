export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          © {year} <span className="accent">LABIDI.WAEL</span> · COCKPIT v1.0
        </div>
        <div className="footer-status">LINK STABLE · READY FOR HANDSHAKE</div>
        <div>BUILD · REACT + FRAMER · NICE.FR</div>
      </div>
    </footer>
  );
}
