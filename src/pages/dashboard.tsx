import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Layout from "../components/Layout";

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
        <div className="mx-auto max-w-5xl">
          <main className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
            <h1 className="text-2xl font-bold">
              Welcome {session?.user.name}! These are your current plants.
            </h1>
          </main>
        </div>
      </Layout>
    </>
  );
};
export default Dashboard;
