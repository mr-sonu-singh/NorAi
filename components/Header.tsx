"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/team", label: "Team" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header>
      <div className="nav-container">
        <Link href="/" className="logo">
          <i className="fa-solid fa-bolt"></i> NorAI <span>Tech</span>
        </Link>

        <button
          className={`nav-toggle${isOpen ? " open" : ""}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu${isOpen ? " open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`nav-link${pathname === item.href ? " active" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className={`nav-link nav-cta${pathname === "/contact" ? " active" : ""}`}
            >
              Get Started
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}