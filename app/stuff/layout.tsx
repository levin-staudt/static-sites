import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "stuff",
  description: "sachen",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
