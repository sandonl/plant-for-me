import { NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Layout from "../components/Layout";
import PlantCard from "../components/PlantCard";
import { Session } from "next-auth";
import { useRouter } from "next/router";
import { Button } from "../components/ui/button";
import Link from "next/link";

interface dashboardProps {}

const fakeData = [
  {
    id: "23213131",
    name: "White Edge",
    plantName: "Dieffenbachia White Edge",
    water: 3,
  },
  {
    id: "212321311",
    name: "Watermelon Plant",
    plantName: "Aglaonema 'Favonian'",
    water: 5,
  },
  {
    id: "2321313as13131",
    name: "Milky Way",
    plantName: "Dieffenbachia Milky Way ",
    water: 9,
  },
];

const Dashboard = ({}: dashboardProps) => {
  const { data: session } = useSession({
    required: true,
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
            {fakeData.map((plant, id) => (
              <PlantCard plant={plant} key={id} />
            ))}
            <div className="flex justify-end py-2">
              <Button asChild>
                <Link href="/addplant">Add plant</Link>
              </Button>
            </div>
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
