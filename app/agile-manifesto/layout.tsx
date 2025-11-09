import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agile Manifesto",
  description: "Original Agile Manifesto in a better design",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
