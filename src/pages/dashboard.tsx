import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import Layout from "../components/Layout";
import PlantCard from "../components/PlantCard";
import { Button } from "../components/ui/button";
import { api } from "../utils/api";
import { NextPage } from "next";
import PlantCardSkeleton from "../components/PlantCardSkeleton";

interface dashboardProps {}

const Dashboard: NextPage = ({}: dashboardProps) => {
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
            Welcome {session?.user.name}!
          </h1>

          <h2 className="mb-5 text-center font-semibold">
            These are your current plants:
          </h2>
          <div className="mx-auto w-96 max-w-4xl md:w-full">
            {allPlants.isLoading ||
            allPlants.isFetching ||
            allPlants.isInitialLoading ? (
              <>
                <PlantCardSkeleton />
              </>
            ) : (
              <>
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
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Dashboard;

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
