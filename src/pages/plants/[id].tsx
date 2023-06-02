import Layout from "@/src/components/Layout";
import { useRouter } from "next/router";

interface PlantPage {}

const PlantPage = ({}: PlantPage) => {
  const router = useRouter();

  console.log(router.query);

  const { name, plantName, water } = router.query;

  console.log(name, plantName, water);

  return (
    <>
      <Layout pageTitle={"Plant"}>
        <h3> This is a specific plant page </h3>
        <> {name} </>
      </Layout>
    </>
  );
};
export default PlantPage;
