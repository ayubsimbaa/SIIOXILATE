import { Skeleton } from "@components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-3">
      <Skeleton className="w-full h-[36px]" />
      <Skeleton className="w-full h-[36px]" />
      <Skeleton className="w-full h-[36px]" />
      <Skeleton className="w-full h-[36px]" />
      <Skeleton className="w-full h-[36px]" />
      <Skeleton className="w-full h-[36px]" />
      <Skeleton className="w-full h-[36px]" />
    </div>
  );
}
