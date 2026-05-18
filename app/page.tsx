import Image from "next/image";

export default function Home() {
  return (
    <main style={styles.container}>
      {/* LOGO */}
      <Image
        src="/Logo.png"
        alt="Ibarra Customs Rods Logo"
        width={180}
        height={180}
        style={styles.logo}
        priority
      />

      {/* TITLE */}
      <h1 style={styles.title}>Ibarra Customs Rods</h1>

      {/* SUBTITLE */}
      <p style={styles.subtitle}>
        Handcrafted custom fishing rods built for performance, precision, and durability.
      </p>

      {/* BUTTONS */}
      <div style={styles.buttons}>
        <a href="/shop" style={styles.primaryBtn}>View Products</a>
        <a href="/about" style={styles.secondaryBtn}>Contact</a>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    textAlign: "center",
    padding: "20px",
  },
  logo: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "42px",
    fontWeight: 800,
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px",
    maxWidth: "500px",
  },
  buttons: {
    display: "flex",
    gap: "15px",
  },
  primaryBtn: {
    padding: "10px 18px",
    backgroundColor: "#000",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
  },
  secondaryBtn: {
    padding: "10px 18px",
    border: "1px solid #000",
    color: "#000",
    textDecoration: "none",
    borderRadius: "6px",
  },
};
