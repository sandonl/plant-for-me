import Image from "next/image";
import { cn } from "../lib/utils";
import { useState } from "react";

interface PhotoCardProps {
  source: string;
}

const PhotoCard = ({ source }: PhotoCardProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="h-[333px] w-[250px] overflow-hidden rounded-lg shadow-sm">
      <Image
        src={source}
        priority
        alt={""}
        width={250}
        height={333}
        className={cn(
          "portrait h-[333px] w-[250px] object-cover transition-all hover:scale-105",
          isLoading
            ? "scale-105 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};
export default PhotoCard;
