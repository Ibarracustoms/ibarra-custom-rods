export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold">
        Ibarra Customs Rods
      </h1>

      <p className="mt-4 text-gray-600 max-w-xl">
        Handcrafted custom fishing rods built for performance, precision, and durability.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#products"
          className="rounded-xl bg-black px-6 py-3 text-white"
        >
          View Products
        </a>

        <a
          href="#contact"
          className="rounded-xl border border-black px-6 py-3"
        >
          Contact
        </a>
      </div>
    </main>
  );
}
