import Layout from "@/src/components/Layout";
import { Button } from "@/src/components/ui/button";
import { api } from "@/src/utils/api";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

interface PlantPage {}

const PlantPage = ({}: PlantPage) => {
  const router = useRouter();
  const { id } = router.query;

  const plantData = api.plant.getPlant.useQuery({ plantId: id as string });

  if (plantData.isFetching || plantData.isLoading) {
    return (
      <>
        <Layout pageTitle={"Loading..."}>
          <div className="mx-auto max-w-4xl py-5 md:w-full">
            <h1 className="text-sm font-bold md:text-3xl">Loading...</h1>
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
