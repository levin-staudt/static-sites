import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leverage",
  description: "Short explainer of leverage",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
