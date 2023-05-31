import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Layout from "../components/Layout";
import PlantCard from "../components/PlantCard";

interface dashboardProps {}

interface PlantData {
  name: string;
  subtitle: string;
  water: number;
}

const Dashboard: NextPage = ({}: dashboardProps) => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/");
    },
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
          <div className="mx-auto w-full max-w-4xl">
            <PlantCard />
            <PlantCard />
            <PlantCard />
            <PlantCard />
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Dashboard;
