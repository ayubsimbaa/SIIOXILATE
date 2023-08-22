
import { Suspense } from "react";
import Loading from "./loading";
import Page from "./page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#ffffff] py-8">
      <div className="pl-8 space-y-2">
        <p className="font-semibold text-3xl">
        New Insights!!
        </p>
      </div>
      <div className="px-8 pt-10 pb-10">
        <Suspense fallback={<Loading />}>
          <Page />
        </Suspense>
      </div>
    </div>
  );
}
