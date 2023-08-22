import Page from "./page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" py-8">
      <Page />
    </div>
  );
}
