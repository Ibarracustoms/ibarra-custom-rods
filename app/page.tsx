export default function Home() {
  return (
    <main style={styles.page}>
      <div style={styles.topBar}>Fast shipping on all in-stock items.</div>

      <header style={styles.header}>
        
      </header>

      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroSmall}>The possibilities are endless.</h1>
          <h2 style={styles.heroTitle}>
            Top-tier custom fishing rods for every angler.
          </h2>

          <div style={styles.buttons}>
            <a href="/shop" style={styles.primaryBtn}>Shop In-stock Specials</a>
            <a href="/about" style={styles.secondaryBtn}>Learn More</a>
          </div>
        </div>
      </section>

      <section style={styles.intro}>
        <h2 style={styles.sectionTitle}>Ibarra Custom Rods</h2>
        <h3 style={styles.tagline}>Sleek · Clean · Classy</h3>
        <p style={styles.text}>
          We build high-quality custom fishing rods with clean wraps,
          durable components, and attention to every detail.
        </p>
        <a href="/shop" style={styles.darkBtn}>Get Your Custom Build Started</a>
      </section>

      <section style={styles.categories}>
        <div style={styles.card}>
          <h3>Offshore Rods</h3>
          <p>Tuna · Jig · Pop · Heavy-duty builds</p>
          <a href="/shop" style={styles.cardLink}>See more</a>
        </div>

        <div style={styles.card}>
          <h3>Inshore Rods</h3>
          <p>Spinning · Conventional · Light tackle</p>
          <a href="/shop" style={styles.cardLink}>See more</a>
        </div>

        <div style={styles.card}>
          <h3>Surf & Back Bay</h3>
          <p>Surf casting rods built for distance and control</p>
          <a href="/shop" style={styles.cardLink}>See more</a>
        </div>
      </section>

      <section style={styles.buildSection}>
        <div style={styles.buildOverlay}>
          <h2 style={styles.buildTitle}>CUSTOMIZED FISHING RODS</h2>
          <p style={styles.buildText}>
            Every build is made with performance, balance, and style in mind.
            Choose your colors, guides, grips, and layout to create your dream rod.
          </p>
          <a href="/contact" style={styles.primaryBtn}>Start Your Build</a>
        </div>
      </section>

      <footer style={styles.footer}>
        <h3>Ibarra Custom Rods</h3>
        <p>Custom fishing rods built for performance, precision, and durability.</p>
      </footer>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    margin: 0,
    backgroundColor: "#000",
    color: "#fff",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  topBar: {
    backgroundColor: "#111",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    fontSize: "14px",
    letterSpacing: "1px",
  },

  header: {
    backgroundColor: "#000",
    padding: "24px 20px",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
  },

  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "42px",
    flexWrap: "wrap",
  },

  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
  },

  hero: {
    backgroundImage: "url('/hero.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "720px",
  },

  heroOverlay: {
    minHeight: "720px",
    backgroundColor: "rgba(0,0,0,0.35)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "20px",
  },

  heroSmall: {
    fontSize: "30px",
    marginBottom: "12px",
    fontWeight: 500,
  },

  heroTitle: {
    fontSize: "64px",
    maxWidth: "950px",
    lineHeight: 1.1,
    margin: "0 0 35px",
    fontWeight: 800,
  },

  buttons: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  primaryBtn: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "15px 28px",
    textDecoration: "none",
    borderRadius: "4px",
    fontWeight: 700,
  },

  secondaryBtn: {
    border: "1px solid #fff",
    color: "#fff",
    padding: "15px 28px",
    textDecoration: "none",
    borderRadius: "4px",
    fontWeight: 700,
  },

  intro: {
    backgroundColor: "#fff",
    color: "#111",
    textAlign: "center",
    padding: "80px 20px",
  },

  sectionTitle: {
    fontSize: "42px",
    marginBottom: "10px",
  },

  tagline: {
    fontSize: "28px",
    marginBottom: "24px",
  },

  text: {
    maxWidth: "760px",
    margin: "0 auto 30px",
    fontSize: "18px",
    lineHeight: 1.7,
  },

  darkBtn: {
    display: "inline-block",
    backgroundColor: "#000",
    color: "#fff",
    padding: "15px 28px",
    textDecoration: "none",
    borderRadius: "4px",
    fontWeight: 700,
  },

  categories: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
    padding: "60px 30px",
    backgroundColor: "#f5f5f5",
    color: "#111",
  },

  card: {
    backgroundColor: "#fff",
    padding: "40px 25px",
    textAlign: "center",
    border: "1px solid #ddd",
  },

  cardLink: {
    color: "#000",
    fontWeight: 700,
  },

  buildSection: {
    backgroundImage: "url('/hero.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "520px",
  },

  buildOverlay: {
    minHeight: "520px",
    backgroundColor: "rgba(0,0,0,0.55)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
  },

  buildTitle: {
    fontSize: "46px",
    marginBottom: "20px",
  },

  buildText: {
    maxWidth: "780px",
    fontSize: "20px",
    lineHeight: 1.6,
    marginBottom: "30px",
  },

  footer: {
    backgroundColor: "#000",
    color: "#fff",
    textAlign: "center",
    padding: "50px 20px",
  },
};
