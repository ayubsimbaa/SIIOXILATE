"use client";

import Topic from "components/Other/Topic";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen text-white bg-gray-light font-lato ">
      <div className="bg-gray-700 w-[425px] p-2 bg-gray-dark">aside</div>
      <div className="bg-gray-800 flex-1 p-2 max-w-[1272px] mx-auto">
        <div>
          <div className="flex justify-between bg-gray-dark items-center p-4">
            <div className="font-black text-lg">My topics</div>
            <div>
              <div className="flex items-center">
                <Image alt="profile" src={"/pic.png"} width={32} height={32} />
                <span>Jane Cooper</span>
              </div>
            </div>
          </div>

          {/* main */}
          <div className="bg-[#ffffff]">
            <div className="flex pl-8 pt-10 justify-between">
              <div className="flex flex-col gap-1">
                <Topic
                  imageUrl="/Contracts.svg"
                  variant="normal"
                  title="Contracts"
                />
                <Topic
                  imageUrl="/Contracts.svg"
                  variant="normal"
                  title="Clients"
                />
                <Topic
                  imageUrl="/Contracts.svg"
                  variant="normal"
                  title="Claims"
                />
                <Topic
                  imageUrl="/Contracts.svg"
                  variant="normal"
                  title="Products"
                />
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

          <div className="font-medium text-[10px] bg-gray-dark p-1 w-full">
            Copyright © 2023 Helsinski Insurance Limited. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
