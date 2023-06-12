import Layout from "@/src/components/Layout";
import PhotoCard from "@/src/components/PhotoCard";
import PlantPageSkeleton from "@/src/components/PlantPageSkeleton";
import { Button } from "@/src/components/ui/button";
import { Progress } from "@/src/components/ui/progress";
import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area";
import { api } from "@/src/utils/api";
import { MoveLeft } from "lucide-react";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface PlantPage {}

const PlantPage = ({}: PlantPage) => {
  const router = useRouter();
  const { id } = router.query;
  const plantData = api.plant.getPlant.useQuery(
    { plantId: id as string },
    { refetchOnWindowFocus: false }
  );

  if (
    plantData.isFetching ||
    plantData.isLoading ||
    plantData.isInitialLoading
  ) {
    return (
      <>
        <PlantPageSkeleton />
      </>
    );
  }

  return (
    <>
      <Layout pageTitle={plantData.data?.name as string}>
        <div className="mx-auto max-w-4xl py-5 md:w-full">
          <h1 className="text-md font-bold md:text-3xl">
            {plantData.data?.name}
          </h1>
          <div className="my-3 border-b border-slate-200" />
          <h2 className="pb-2 pt-3 font-semibold">
            {" "}
            {plantData.data?.plantName}{" "}
          </h2>
          <div className="flex items-center justify-between space-x-4 align-baseline">
            <p> Water level: </p>
            <Progress
              value={plantData.data?.water}
              className="w-1/2 bg-slate-200"
            />
          </div>
          <div className="py-10 ">
            <h3 className="pb-1 font-semibold">Notes:</h3>
            <p> {plantData.data?.notes} </p>
          </div>

          <div className="mb-10 flex flex-col space-y-4">
            <h3 className="text-md font-semibold md:text-2xl">Photo Log:</h3>
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  <PhotoCard />
                  <PhotoCard />
                  <PhotoCard />
                  <PhotoCard />
                  <PhotoCard />
                  <PhotoCard />
                  <PhotoCard />
                  <PhotoCard />
                  <PhotoCard />
                  <PhotoCard />
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
          <Button asChild variant="outline">
            <Link href={"/dashboard"}>
              <MoveLeft />
            </Link>
          </Button>
        </div>
      </Layout>
    </>
  );
};
export default PlantPage;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
