import Image from "next/image";
import { cn } from "../lib/utils";

interface PhotoCardProps {
  source: string;
}

const PhotoCard = ({ source }: PhotoCardProps) => {
  return (
    <div className="w-[250px] overflow-hidden rounded-lg shadow-sm">
      <Image
        src={source}
        alt={""}
        width={150}
        height={150}
        className={cn(
          "portrait h-auto w-auto object-cover transition-all hover:scale-105"
        )}
      />
    </div>
  );
};
export default PhotoCard;
