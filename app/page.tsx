export default function Home() {
  return (
    <main style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.title}>Ibarra Custom Rods</h1>

          <p style={styles.subtitle}>
            Handcrafted custom fishing rods built for performance,
            precision, and durability.
          </p>

          <div style={styles.buttons}>
            <a href="/shop" style={styles.primaryBtn}>
              View Products
            </a>

            <a href="/about" style={styles.secondaryBtn}>
              About Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    backgroundImage: "url('/hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
  },

  overlay: {
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.35)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },

  content: {
    color: "#fff",
    maxWidth: "800px",
  },

  title: {
    fontSize: "72px",
    fontWeight: 800,
    marginBottom: "20px",
    letterSpacing: "-2px",
  },

  subtitle: {
    fontSize: "22px",
    lineHeight: 1.6,
    marginBottom: "40px",
    color: "rgba(255,255,255,0.9)",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "14px 28px",
    backgroundColor: "#fff",
    color: "#000",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "16px",
  },

  secondaryBtn: {
    padding: "14px 28px",
    border: "1px solid #fff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "16px",
  },
};
