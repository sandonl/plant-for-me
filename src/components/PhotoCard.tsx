import Image from "next/image";
import { cn } from "../lib/utils";
import { useState } from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./ui/context-menu";
import { PlusCircle } from "lucide-react";

interface PhotoCardProps {
  source: string;
}

const PhotoCard = ({ source }: PhotoCardProps) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="h-[333px] w-[250px] overflow-hidden rounded-lg shadow-sm">
      <ContextMenu>
        <ContextMenuTrigger>
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
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Delete</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
};
export default PhotoCard;
