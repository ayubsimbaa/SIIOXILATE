import { Button } from "../ui/button";

interface Props {
  title: string;
  location: string;
  button_name: string;
}

export default function CompetingProduct(props: Props) {
  return (
    <div className="grid w-full bg-gray-light grid-flow-col grid-cols-3 px-4 py-2">
      <p>{props.title}</p>
      <Button>{props.location}</Button>

      <Button variant={"open_link"}>{props.button_name}</Button>
    </div>
  );
}
