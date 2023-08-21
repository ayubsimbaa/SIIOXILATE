import { Popover, PopoverContent, PopoverTrigger } from "components/ui/popover";
import Image from "next/image";

interface Props {
  imageUrl: string;
  title: string;
  variant: "withall" | "normal";
}

function Topic2(props: Props) {
  return (
    <>
      {props.variant === "normal" ? (
        <Popover>
          <PopoverTrigger>
            <div className="flex gap-4 w-full items-center py-8 bg-gray-light mx-auto px-20">
              {/* Icon */}
              <div>
                <Image alt="icon" src={props.imageUrl} width={52} height={52} />
              </div>
              <div className="flex flex-col gap-3">
                <p
                  className={`font-black text-lg ${
                    props.variant === "normal" ? "text-black" : "text-blue-dark"
                  }`}
                >
                  {props.title}
                </p>
              </div>
              {/* Text */}
            </div>
          </PopoverTrigger>
          <PopoverContent className="first-letter:capitalize bg-[#ffffff]">
            no information available at this moment.
          </PopoverContent>
        </Popover>
      ) : (
        <>
          <div className="flex gap-4 max-w-[544px] items-center py-8 bg-gray-light px-14">
            {/* Icon */}
            <div>
              <Image alt="icon" src={props.imageUrl} width={52} height={52} />
            </div>
            <div className="flex flex-col gap-3">
              <p className={`font-black text-lg text-blue-dark`}>
                {props.title}
              </p>
              {props.variant === "withall" && (
                <div className="flex gap-14">
                  <p className="font-semibold text-sm max-w-[248px]">
                    Many Insurance companies compete to provide services .
                  </p>
                  <Image
                    alt=""
                    src={"/arrow-up-right.svg"}
                    width={39}
                    height={39}
                  />
                </div>
              )}
            </div>
            {/* Text */}
          </div>
        </>
      )}
    </>
  );
}

export default Topic2;
