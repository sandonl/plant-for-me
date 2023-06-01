import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";

interface PlantCardProps {
  plant: {
    name: string;
    plantName: string;
    water: number;
  };
}

const PlantCard = (props: PlantCardProps) => {
  const { name, plantName, water } = props.plant;

  return (
    <Card className="mb-2">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{plantName}</CardDescription>
      </CardHeader>
      <CardContent className="flex space-x-3">
        <>
          <p> Current water level: </p>
        </>
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};
export default PlantCard;
