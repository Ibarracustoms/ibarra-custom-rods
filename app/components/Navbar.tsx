"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.links}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/shop" style={styles.link}>Shop</Link>
        <Link href="/about" style={styles.link}>About</Link>
      </div>
    </nav>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    width: "100%",
    padding: "20px 0",
    borderBottom: "1px solid #eee",
    backgroundColor: "#fff",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
  },
  link: {
    textDecoration: "none",
    color: "#111",
    fontSize: "16px",
    fontWeight: 500,
  },
};
