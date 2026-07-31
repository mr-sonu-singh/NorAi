import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-minimal">
      <div className="footer-minimal-container">
        <div className="footer-minimal-left">
          <i className="fa-solid fa-bolt" aria-hidden="true"></i>
          <span>&copy; 2026 NorAI Technologies Pvt. Ltd.</span>
        </div>

        <nav className="footer-minimal-links">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}