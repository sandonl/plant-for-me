import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { api } from "../utils/api";
import { redirect } from "next/dist/server/api-utils";

interface dashboardProps {}

const Dashboard = ({}: dashboardProps) => {
  // Add return to the homepage if no session exists

  const { data: session, status } = useSession();

  if (!session) {
    return <> Unauthorised </>;
  }

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
