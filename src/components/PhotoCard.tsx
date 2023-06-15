import Image from "next/image";
import { cn } from "../lib/utils";

interface PhotoCardProps {
  source: string;
}

const PhotoCard = ({ source }: PhotoCardProps) => {
  return (
    <div className="h-[333px] w-[250px] overflow-hidden rounded-lg shadow-sm">
      <Image
        src={source}
        priority
        alt={""}
        width={250}
        height={333}
        className={cn(
          "portrait h-[333px] w-[250px] object-cover transition-all hover:scale-105"
        )}
      />
    </div>
  );
};
export default PhotoCard;
