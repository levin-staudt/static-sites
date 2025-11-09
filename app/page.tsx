import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Übersicht der Projekte</h1>
      <nav className="flex flex-col gap-2">
        <Link href="/hebelwirkung" className="hover:underline">
          Leverage
        </Link>
        <Link href="/agile-manifesto" className="hover:underline">
          Agile Manifesto
        </Link>
        <Link href="/business-card" className="hover:underline">
          Business Card
        </Link>
      </nav>
    </div>
  );
}
