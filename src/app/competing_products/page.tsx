"use client";

import CompetingProduct from "@/src/components/Other/CompetingProduct";
import { competingProducts } from "@/src/fakeData/data";

export default function Page() {
  return (
    <div className="space-y-2">
      {competingProducts.map((item, index) => (
        <CompetingProduct {...item} key={index} />
      ))}
    </div>
  );
}
