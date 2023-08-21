import Image from "next/image";

interface Props {
  imageUrl: string;
  title: string;
  variant: "withall" | "normal";
}

export default function Topic(props: Props) {
  return (
    <div className="flex gap-4 max-w-[544px] items-center py-8 bg-gray-light px-14">
      {/* Icon */}
      <div>
        <Image alt="icon" src={props.imageUrl} width={52} height={52} />
      </div>
      <div className="flex flex-col gap-3">
        <p
          className={`font-black text-lg  ${
            props.variant === "normal" ? "text-black" : "text-blue-dark"
          }`}
        >
          {props.title}
        </p>
        {props.variant === "withall" && (
          <div className="flex gap-14">
            <p className="font-semibold text-sm max-w-[248px]">
              Many Insurance companies compete to provide services .
            </p>
            <Image alt="" src={"/arrow-up-right.svg"} width={39} height={39} />
          </div>
        )}
      </div>
      {/* Text */}
    </div>
  );
}
