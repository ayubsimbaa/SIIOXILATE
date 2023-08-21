"use client";

import Topic from "components/Other/Topic";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#ffffff] pt-4">
      <div className="pl-8 space-y-2">
        <p className="font-semibold text-4xl">Smart Insurance Topics!</p>
        <p className="font-semibold text-xl">
          Find all your needs faster than ever
        </p>
      </div>
      <div className="flex pl-8 pt-10 justify-between pb-10">
        <div className="flex flex-col gap-1">
          <Topic imageUrl="/Contracts.svg" variant="normal" title="Contracts" />
          <Topic imageUrl="/Contracts.svg" variant="normal" title="Clients" />
          <Topic imageUrl="/Contracts.svg" variant="normal" title="Claims" />
          <Topic imageUrl="/Contracts.svg" variant="normal" title="Products" />
          <Topic
            imageUrl="/Contracts.svg"
            variant="withall"
            title="Competing Products"
          />
        </div>
        <div>
          <Image
            alt="insurance image"
            src={"/insurance.png"}
            width={598}
            height={641}
          />
        </div>
      </div>
    </div>
  );
}
