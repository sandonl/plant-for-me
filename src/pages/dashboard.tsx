import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Layout from "../components/Layout";
import PlantCard from "../components/PlantCard";
import PlantCardSkeleton from "../components/PlantCardSkeleton";
import { Button } from "../components/ui/button";
import { api } from "../utils/api";

const Dashboard: NextPage = () => {
  const { data: session } = useSession({
    required: true,
  });

  const allPlants = api.plant.getPlants.useQuery(undefined, {
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <Layout pageTitle="Dashboard">
        <div className="flex min-w-full flex-col">
          <h1 className="my-3 text-center text-sm font-bold md:text-2xl">
            {session ? (
              <> Welcome {session?.user.name}! </>
            ) : (
              <div className="h-5" />
            )}
          </h1>
          <>
            <div className="mx-auto w-96 max-w-4xl md:w-full">
              {allPlants.isLoading ||
              allPlants.isFetching ||
              allPlants.isInitialLoading ? (
                <PlantCardSkeleton />
              ) : (
                <>
                  {allPlants.data?.length === 0 ? (
                    <>
                      <h2 className="mb-5 text-center font-semibold">
                        You don&apos;t currently have any plants, add one below
                      </h2>
                      <div className="flex justify-end py-2">
                        <Button asChild>
                          <Link href="/addplant">Add Plant</Link>
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="mb-5 text-center font-semibold">
                        This is your current plant collection:
                      </h2>
                      {allPlants.data?.map((plant, id) => (
                        <PlantCard plant={plant} key={id} />
                      ))}
                      <div className="flex justify-end py-2">
                        <Button asChild>
                          <Link href="/addplant">Add Plant</Link>
                        </Button>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </>
        </div>
      </Layout>
    </>
  );
};
export default Dashboard;
