import { Button } from "../ui/button";

interface Props {
  subtitle: string;
  title: string;
  body: {
    text: string;
  };
}

export default function Insights(props: Props) {
  return (
    <div className="insight bg-[#E9E7E7] py-9 px-14 text-sm rounded-[28px]">
      <p className="font-averia text-xl">Machine Learning Generated Insight</p>
      <h4 className="font-averia font-light text-[#5C6277] mb-10">
        {props.subtitle}
      </h4>
      <h2>{props.title}</h2>
      <code>{props.body.text}</code>
      <p
        className="line-clamp-2 mb-5 font-actor"
        dangerouslySetInnerHTML={{ __html: props.body.text }}
        // onMouseOver={(e) => {
        //   const target = e.target;
        //   if (target.className === "highlight") {
        //     alert(insight.body.highlightedInfo[target.textContent]);
        //   }
        // }}
      ></p>
      <div className="flex gap-5">
        <Button variant={"validate_insight"}>validate insight</Button>
        <Button variant={"calcel_insight"}>cancel insight</Button>
      </div>
    </div>
  );
}
