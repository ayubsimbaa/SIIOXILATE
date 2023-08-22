"use client";

import Insights from "@/src/components/Other/Insights";
import { useEffect, useState } from "react";
import mockData from "./mockData.json";

export default function Page() {
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    // Simulating a delay as if it's a real request
    setTimeout(() => {
      setData(mockData);
    }, 1100);
  }, []);

  return (
    <div className="space-y-8">
      {data &&
        data.insights.map((insight, index) => (
          <Insights {...insight} key={index} />
        ))}
    </div>
  );
}

export interface DataType {
  insights: {
    title: string;
    subtitle: string;
    body: {
      text: string;
      highlightedInfo: {
        "holiday season"?: string;
        "recent marketing campaign"?: string;
      };
    };
  }[];
}
