import Image from "next/image";
import { Button } from "../ui/button";

interface Props {
  subtitle: string;
  title: string;
  body: {
    text: string;
    highlightedInfo: string;
  };
}

export default function Insights(props: Props) {
  return (
    <div className="insight bg-[#E9E7E7] py-9 px-14 text-sm rounded-[28px] relative">
      <Image
        alt="icon"
        src={"/png/insights.png"}
        width={32}
        height={32}
        className="absolute top-5 left-5"
      />
      <p className="font-averia text-xl">Machine Learning Generated Insight</p>
      <h4 className="font-averia font-light text-[#5C6277] mb-10">
        {props.subtitle}
      </h4>
      <h2>{props.title}</h2>
      <div className="line-clamp-2 mb-5 font-actor">
        <p
          dangerouslySetInnerHTML={{ __html: props.body.text }}
          // onMouseOver={(e) => {
          //   const target = e.target;
          //   if (target instanceof Element) {
          //     if (target.className === "highlight") {
          //       if (target.textContent !== null) {
          //         alert(props.body.highlightedInfo[target.textContent]);
          //       }
          //     }
          //   }
          // }}
        ></p>
      </div>

      <div className="flex gap-5">
        <Button variant={"validate_insight"}>validate insight</Button>
        <Button variant={"calcel_insight"}>cancel insight</Button>
      </div>
    </div>
  );
}
