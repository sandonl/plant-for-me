import Layout from "./Layout";
import { Skeleton } from "./ui/skeleton";

interface PlantPageSkeletonProps {}

const PlantPageSkeleton = ({}: PlantPageSkeletonProps) => {
  return (
    <>
      <Layout pageTitle="Loading...">
        <div className="mx-auto max-w-4xl py-5 md:w-full">
          <div className="my-1">
            <Skeleton className="h-9 w-40 bg-slate-300" />
          </div>
          <div className="my-3 border-b border-slate-200" />

          <div className="flex flex-col space-x-1">
            <Skeleton className="my-2 h-3 w-96 bg-slate-300" />
            <Skeleton className="my-2 h-3 w-72 bg-slate-300" />
            <Skeleton className="my-2 h-3 w-96 bg-slate-300" />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default PlantPageSkeleton;
