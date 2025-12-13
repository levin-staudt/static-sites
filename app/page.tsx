import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
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
        <Link href="/stuff" className="hover:underline">
          stuff
        </Link>
      </nav>
    </div>
  );
}
