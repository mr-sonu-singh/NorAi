"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="nav-container">
        <Link href="/" className="logo">
          <i className="fa-solid fa-bolt"></i> NorAI <span>Tech</span>
        </Link>
        <ul className="nav-menu">
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
