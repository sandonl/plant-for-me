import Layout from "@/src/components/Layout";
import { Button } from "@/src/components/ui/button";
import { Skeleton } from "@/src/components/ui/skeleton";
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
        <Layout pageTitle={"Loading..."}>
          <div className="mx-auto max-w-4xl py-5 md:w-full">
            <div className="my-1">
              <Skeleton className="h-10 w-40 bg-slate-300" />
            </div>
            <div className="my-3 border-b border-slate-200" />

            <div className="py-1">
              <Skeleton className="my-2 h-3 w-96 bg-slate-300" />
              <Skeleton className="my-2 h-3 w-72 bg-slate-300" />
            </div>
          </div>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Layout pageTitle={plantData.data?.name as string}>
        <div className="mx-auto max-w-4xl py-5 md:w-full">
          <h1 className="text-sm font-bold md:text-3xl">
            {plantData.data?.name}
          </h1>
          <div className="my-3 border-b border-slate-200" />
          <h2 className="py-2"> {plantData.data?.plantName} </h2>
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
