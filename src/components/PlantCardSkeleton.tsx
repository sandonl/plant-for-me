import { Card } from "@/src/components/ui/card";
import { Skeleton } from "./ui/skeleton";

const PlantCardSkeleton = () => {
  return (
    <>
      <Card className="mb-2 flex flex-col space-y-1.5 p-6">
        <div className="my-1">
          <Skeleton className="h-2 w-32 py-2" />
        </div>
        <div className="py-1">
          <Skeleton className="my-2 h-2 w-96" />
          <Skeleton className="my-2 h-2 w-72" />
        </div>
      </Card>
      <Card className="mb-2 flex flex-col space-y-1.5 p-6">
        <div className="my-1">
          <Skeleton className="h-2 w-32 py-2" />
        </div>
        <div className="py-1">
          <Skeleton className="my-2 h-2 w-96" />
          <Skeleton className="my-2 h-2 w-72" />
        </div>
      </Card>
      <Card className="mb-2 flex flex-col space-y-1.5 p-6">
        <div className="my-1">
          <Skeleton className="h-2 w-32 py-2" />
        </div>
        <div className="py-1">
          <Skeleton className="my-2 h-2 w-96" />
          <Skeleton className="my-2 h-2 w-72" />
        </div>
      </Card>
    </>
  );
};
export default PlantCardSkeleton;
