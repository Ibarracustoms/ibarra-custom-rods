import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.link}>HOME</Link>
      <Link href="/shop" style={styles.link}>SHOP</Link>
      <Link href="/about" style={styles.link}>ABOUT</Link>
      <Link href="/contact" style={styles.link}>CONTACT</Link>
    </nav>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    width: "100%",
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "44px",
    padding: "24px 20px",
    letterSpacing: "2px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 600,
  },
};
