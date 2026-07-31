import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero not-found-hero">
      <div className="not-found-code">404</div>
      <h1>Page Not Found</h1>
      <p>
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <div className="hero-btns" style={{ justifyContent: "center", marginTop: "1.5rem" }}>
        <Link href="/" className="btn btn-primary">
          <i className="fa-solid fa-house" aria-hidden="true"></i>
          Back to Home
        </Link>
        <Link href="/contact" className="btn btn-secondary">
          Contact Us
        </Link>
      </div>
    </section>
  );
}