import { NextPage } from "next";
import { getSession } from "next-auth/react";
import type { GetSessionParams } from "next-auth/react";
import AddPlantForm from "../components/AddPlantForm";
import Layout from "../components/Layout";

const addplant: NextPage = () => {
  return (
    <Layout pageTitle="Add Plant">
      <div className="mx-auto max-w-4xl py-5 md:w-full">
        <h1 className="py-3 text-3xl font-bold"> Add a New Plant </h1>
        <p className=" text-sm">Enter details of your new plant</p>
        <div className="my-3 border-b border-slate-200" />
        <AddPlantForm />
      </div>
    </Layout>
  );
};
export default addplant;

export async function getServerSideProps(context: GetSessionParams) {
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
