export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Simple passthrough - no wrapper restrictions
  return <>{children}</>;
}
