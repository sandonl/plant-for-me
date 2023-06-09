import Layout from "@/src/components/Layout";
import { Button } from "@/src/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

interface PlantPage {}

const PlantPage = ({}: PlantPage) => {
  const router = useRouter();
  const { name, plantName, water, id } = router.query;

  console.log(id);

  return (
    <>
      <Layout pageTitle={name as string}>
        <div className="mx-auto max-w-4xl py-5 md:w-full">
          <h1 className="text-sm font-bold md:text-3xl"> {name} </h1>
          <div className="my-3 border-b border-slate-200" />
          <h2 className="py-2"> {plantName} </h2>
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
