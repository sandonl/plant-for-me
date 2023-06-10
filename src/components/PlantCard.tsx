import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { useEffect, useState } from "react";

import { Progress } from "@/src/components/ui/progress";
import Link from "next/link";

interface PlantCardProps {
  plant: {
    id: string;
    name: string;
    plantName: string;
    water: number;
  };
}

const PlantCard = (props: PlantCardProps) => {
  const { name, plantName, water, id } = props.plant;

  const [progress, setProgress] = useState(water);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progress * 10), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Link href={{ pathname: `plants/${id}` }}>
      <Card className="mb-2 cursor-pointer">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{plantName}</CardDescription>
        </CardHeader>
        {/* TODO: Readd */}
        {/* <CardContent className="flex items-center justify-between">
          <>
            <p className="text-sm font-bold"> Requires water: </p>
            <Progress value={progress} className="w-1/2 bg-slate-200" />
          </>
        </CardContent> */}
      </Card>
    </Link>
  );
};
export default PlantCard;
