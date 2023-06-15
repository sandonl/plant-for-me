import AddPhoto from "@/src/components/AddPhoto";
import Layout from "@/src/components/Layout";
import PhotoCard from "@/src/components/PhotoCard";
import PlantPageSkeleton from "@/src/components/PlantPageSkeleton";
import { Button } from "@/src/components/ui/button";
import { ScrollArea, ScrollBar } from "@/src/components/ui/scroll-area";
import { env } from "@/src/env.mjs";
import { supabase } from "@/src/server/supabase/supabaseClient";
import { api } from "@/src/utils/api";
import { MoveLeft } from "lucide-react";
import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { calculateNextWater } from "@/src/utils/dates";
import { toast } from "@/src/components/ui/use-toast";

interface PlantPage {}

interface Image {
  name: string;
  id: string;
  created_at: string;
  last_accessed_at: string;
  updated_at: string;
}

const PlantPage = ({}: PlantPage) => {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();

  const [images, setImages] = useState<Image[]>([]);
  const [lastWatered, setLastWatered] = useState<Date>();
  const [diffDays, setDiffDays] = useState<number>();

  const userId = session?.user.id;
  const uploadUrl = `${env.NEXT_PUBLIC_STORAGE_URL}${userId}/${id}`;
  const updateLastWatered = api.plant.updateLastWatered.useMutation();
  const plantData = api.plant.getPlant.useQuery(
    { plantId: id as string },
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    getImages();
  }, []);

  useEffect(() => {
    if (plantData.data) {
      setLastWatered(plantData.data.lastWatered);
      if (lastWatered) {
        setDiffDays(plantData.data.waterFreq - calculateNextWater(lastWatered));
      }
    }
  }, [plantData]);

  const getImages = async () => {
    const { data, error } = await supabase.storage
      .from("plants")
      .list(`${userId}/${id}`);

    if (data) {
      setImages(data);
    } else {
      alert("Error loading images");
      console.log(error);
    }
  };

  const waterPlant = () => {
    const now = new Date();
    updateLastWatered.mutate({ lastWatered: now, plantId: id as string });
    toast({
      title: "Plant watered",
      description: "You have watered your plant, Great job!",
    });

    plantData.refetch();
  };

  if (
    plantData.isFetching ||
    plantData.isLoading ||
    plantData.isInitialLoading
  ) {
    return <PlantPageSkeleton />;
  }

  return (
    <>
      <Layout pageTitle={plantData.data?.name as string}>
        <div className="mx-auto max-w-4xl py-5 md:w-full">
          <h1 className="text-md font-bold md:text-3xl">
            {plantData.data?.name}
          </h1>
          <div className="my-3 border-b border-slate-200" />
          <h2 className="pt-3 font-semibold">{plantData.data?.plantName}</h2>
          <div className="flex items-center justify-between space-x-4 align-baseline">
            {diffDays && diffDays > 0 ? (
              <p>
                Water in the next
                <span className="font-bold"> {diffDays} </span>days
              </p>
            ) : (
              <p className="font-bold text-rose-400">Inspect plant for water</p>
            )}
            <Button onClick={waterPlant}>Water</Button>
            {/* <Progress
              value={plantData.data?.water}
              className="w-1/2 bg-slate-200"
            /> */}
          </div>
          <div className="py-10 ">
            <h3 className="pb-1 font-semibold">Notes:</h3>
            <p> {plantData.data?.notes} </p>
          </div>

          <div className="mb-5 flex flex-col space-y-4">
            <h3 className="text-md font-semibold md:text-2xl">Photo Log</h3>
            <p className="md:text-md text-sm">
              Upload photos of your plant progress
            </p>
            <div className="relative max-w-md lg:max-w-none">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {images[0] && (
                    <>
                      {images.map((image, id) => {
                        return (
                          <PhotoCard
                            source={`${uploadUrl}/${image.name}`}
                            key={id}
                          />
                        );
                      })}
                    </>
                  )}
                  <AddPhoto
                    userId={userId as string}
                    plantId={id as string}
                    getImages={getImages}
                  />
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </div>
          <div className="mb-10 h-10 w-10"></div>

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
