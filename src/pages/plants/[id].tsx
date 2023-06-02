import Layout from "@/src/components/Layout";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/router";

interface PlantPage {}

const PlantPage = ({}: PlantPage) => {
  const router = useRouter();
  const { name, plantName, water, id } = router.query;

  console.log(id);

  // Could just query and reutrn the page based on the id

  return (
    <>
      <Layout pageTitle={name as string}>
        <div className="flex min-w-full flex-col items-center justify-center py-8">
          <h1 className="text-sm font-bold md:text-3xl"> {name} </h1>
          <h2 className="py-2"> {plantName} </h2>
          <Button asChild>
            <Link href={"/dashboard"}>Back</Link>
          </Button>
        </div>
      </Layout>
    </>
  );
};
export default PlantPage;
