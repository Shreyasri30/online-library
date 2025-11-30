// Simple, clean footer shown on every page.
function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer-inner">
        <div className="app-footer-left">
          <span className="footer-brand">Online Library</span>
          <span className="footer-dot">•</span>
          <span className="footer-text">
            Built with React, Vite & Redux for learning purposes.
          </span>
        </div>

        <div className="app-footer-right">
          <span className="footer-text">© {new Date().getFullYear()} Shreyasri</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
