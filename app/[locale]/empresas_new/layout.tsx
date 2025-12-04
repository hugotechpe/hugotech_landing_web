import HomeLayout from "../homeLayout";

export default function EmpresasNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HomeLayout>{children}</HomeLayout>;
}
