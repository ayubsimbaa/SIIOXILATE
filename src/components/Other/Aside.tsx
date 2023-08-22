import Image from "next/image";
import { Button } from "../ui/button";

export default function Aside() {
  const options: OptionType[] = [
    {
      imageUrl: "/svg/home.svg",
      title: "Home",
    },
    {
      imageUrl: "/svg/attachment.svg",
      title: "My Files",
    },
    {
      imageUrl: "/svg/topic.svg",
      title: "My Topics",
    },
    {
      imageUrl: "/svg/mail.svg",
      title: "My Emails",
    },
  ];

  const options2: OptionType[] = [
    {
      imageUrl: "/svg/password.svg",
      title: "Forgot Password",
    },
    {
      imageUrl: "/svg/update.svg",
      title: "Updates & FAQ",
    },
    {
      imageUrl: "/svg/logout.svg",
      title: "Log out",
    },
  ];
  return (
    <div className="bg-gray-700 max-w-[425px] p-5 bg-gray-dark grid pb-20">
      <div className="grid">
        <span className="font-extrabold text-3xl italic p-2 my-10">
          OXILATE
        </span>
        <span>Welcome, Antonio Torrejon! 👋 </span>
      </div>

      <div className="grid gap-2 mt-2 mb-10 bg-gray-light/60 rounded-xl px-5">
        {options.map((opt, index) => (
          <Option {...opt} key={index} />
        ))}
      </div>

      <div className="grid gap-2 mt-2 mb-10 rounded-xl px-5">
        {options2.map((opt, index) => (
          <Option {...opt} key={index} />
        ))}
      </div>
    </div>
  );
}

interface OptionType {
  imageUrl: string;
  title: string;
}

function Option(props: OptionType) {
  return (
    <Button variant={"with_icon"}>
      <Image alt="" src={props.imageUrl} width={32} height={32} />
      <span className="font-semibold">{props.title}</span>
    </Button>
  );
}
