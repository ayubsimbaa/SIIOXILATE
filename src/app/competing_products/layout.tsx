import { Suspense } from "react";
import Loading from "./loading";
import Page from "./page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>
    <Suspense fallback={<Loading/>}>
        <Page/>
    </Suspense>
  </section>;
}
