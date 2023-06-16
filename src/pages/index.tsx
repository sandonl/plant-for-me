import { type NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  const { status } = useSession();

  return (
    <>
      <Layout pageTitle={"Home"}>
        <div className="bg-gradient-to-t from-slate-100 to-green-100">
          <div className="mx-auto max-w-5xl">
            <main className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
              <h1 className="text-6xl font-bold text-slate-900">
                🌱 Plant<span className="text-green-300">er</span>
              </h1>
              <div className="p-4" />
              <h2 className="mx-5 text-center text-3xl font-bold text-slate-900">
                Organise, Manage and Maintain Your Plants
              </h2>
              <div className="p-2" />
              <div className="w-11/12 border-b border-b-slate-200" />
              <div className="p-2" />
              <h3 className="mx-5 text-center text-xl font-bold text-slate-900">
                A central dashboard that helps you track the health of your
                plants, when to water them, and keep track of information to
                help them stay healthy
              </h3>
              <div className="p-2" />

              {status === "authenticated" ? (
                <Button className="px-10 py-6 text-xl" asChild>
                  <Link href="/dashboard"> Go to Dashboard </Link>
                </Button>
              ) : (
                <Button
                  className="px-10 py-6 text-xl"
                  onClick={() =>
                    void signIn("discord", { callbackUrl: "/dashboard" })
                  }
                >
                  Get Started
                </Button>
              )}
            </main>
            <div className="h-screen">
              <div className="relative aspect-video w-full">
                <Image
                  src="/hero/hero.png"
                  alt={""}
                  fill
                  sizes="(max-width: 960px) 100vw, 960px"
                  className="h-auto w-full"
                />
              </div>
              <h2 className="mx-5 my-10 text-center text-3xl font-bold">
                Keep track of information relevant to each plant
              </h2>
              <h2 className="mx-5 my-10 text-center text-3xl font-bold">
                Keep photos of your plant progress
              </h2>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
