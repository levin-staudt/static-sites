import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "THE STANDARD",
  description: "Your standard news source for all things start ups",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
