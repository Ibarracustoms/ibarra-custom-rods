export default function About() {
  return (
    <main style={styles.container}>
      <section style={styles.section}>
        <h1 style={styles.title}>About Ibarra Custom Rods</h1>

        <p style={styles.text}>
          Ibarra Custom Rods builds handcrafted custom fishing rods designed for
          anglers who want performance, durability, and a personal touch in every
          build.
        </p>

        <p style={styles.text}>
          Every rod is built with attention to detail, from blank selection and
          guide layout to wrapping, finish, and overall balance. Whether you are
          fishing the bay, trolling offshore, or building a setup for a specific
          technique, our goal is to create a rod that looks great and performs
          on the water.
        </p>

        <p style={styles.text}>
          We take pride in quality craftsmanship, clean design, and building rods
          that are made to be fished hard.
        </p>
      </section>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0b0b0b",
    color: "#fff",
    padding: "80px 20px",
  },
  section: {
    maxWidth: "850px",
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "48px",
    fontWeight: 800,
    marginBottom: "30px",
  },
  text: {
    fontSize: "18px",
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.85)",
    marginBottom: "22px",
  },
};
