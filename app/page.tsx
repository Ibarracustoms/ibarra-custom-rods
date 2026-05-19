export default function Home() {
  return (
    <main>
      <section style={styles.hero}>
        <div style={styles.overlay}>

          <header style={styles.header}>
            <nav style={styles.nav}>
              <a href="/" style={styles.navLink}>
                Home
              </a>

              <a href="/shop" style={styles.navLink}>
                Shop
              </a>

              <a href="/about" style={styles.navLink}>
                About
              </a>
            </nav>
          </header>

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
      </section>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    backgroundImage: "url('/hero.png')",
    backgroundSize: "contain",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#000",
    minHeight: "100vh",
    width: "100%",
  },

  overlay: {
    minHeight: "100vh",
    width: "100%",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.55))",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    width: "100%",
    padding: "30px 60px",
    display: "flex",
    justifyContent: "center",
  },

  nav: {
    display: "flex",
    gap: "50px",
  },

  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: 500,
    letterSpacing: "1px",
  },

  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    padding: "20px",
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
    maxWidth: "750px",
    color: "rgba(255,255,255,0.92)",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "14px 30px",
    backgroundColor: "#fff",
    color: "#000",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: "16px",
  },

  secondaryBtn: {
    padding: "14px 30px",
    border: "1px solid #fff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: 700,
    fontSize: "16px",
  },
};
