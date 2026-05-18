"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <Link href="/" style={styles.logoWrap}>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={40}
            height={40}
            style={styles.logo}
          />
          <span style={styles.brand}>My Store</span>
        </Link>
      </div>

      <div style={styles.right}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/shop" style={styles.link}>Shop</Link>
        <Link href="/about" style={styles.link}>About</Link>
      </div>
    </nav>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 24px",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
  },
  logo: {
    borderRadius: "6px",
  },
  brand: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#111",
  },
  right: {
    display: "flex",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
  },
};
