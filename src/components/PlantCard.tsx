import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

import Link from "next/link";

interface PlantCardProps {
  plant: {
    id: string;
    name: string;
    plantName: string;
    waterFreq: number;
  };
}

const PlantCard = (props: PlantCardProps) => {
  const { name, plantName, id } = props.plant;

  // const [progress, setProgress] = useState(waterFreq);

  // useEffect(() => {
  //   const timer = setTimeout(() => setProgress(progress * 10), 500);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Link href={{ pathname: `plants/${id}` }}>
      <Card className="mb-2 cursor-pointer transition-transform hover:scale-105 hover:bg-slate-50">
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
