import { getSession } from "next-auth/react";
import Layout from "../components/Layout";

interface addplantProps {}

const addplant = ({}: addplantProps) => {
  return <Layout pageTitle="Add Plant">Add Plant</Layout>;
};
export default addplant;

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
