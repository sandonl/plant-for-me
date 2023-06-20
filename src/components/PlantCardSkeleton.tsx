import { Card } from "@/src/components/ui/card";
import { Skeleton } from "./ui/skeleton";

const PlantCardSkeleton = () => {
  return (
    <>
      <div className="h-2" />
      <Card className="mb-2 flex flex-col space-y-1.5 p-6">
        <Skeleton className="h-2 w-32 py-2" />
        <div className="py-2">
          <Skeleton className="h-2.5 w-72" />
        </div>
      </Card>
      <Card className="mb-2 flex flex-col space-y-1.5 p-6">
        <Skeleton className="h-2 w-32 py-2" />
        <div className="py-2">
          <Skeleton className="h-2.5 w-96" />
        </div>
      </Card>
      <Card className="mb-2 flex flex-col space-y-1.5 p-6">
        <Skeleton className="h-2 w-32 py-2" />
        <div className="py-2">
          <Skeleton className="h-2.5 w-72" />
        </div>
      </Card>
    </>
  );
};
export default PlantCardSkeleton;
