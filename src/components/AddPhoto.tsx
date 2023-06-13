import Image from "next/image";
import { cn } from "../lib/utils";
import { PlusIcon } from "lucide-react";

interface AddPhotoProps {}

const AddPhoto = ({}: AddPhotoProps) => {
  return (
    <div className="h-100 flex w-[250px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-50 object-cover shadow-sm transition-all hover:bg-slate-200">
      <PlusIcon size={48} />
    </div>
  );
};
export default AddPhoto;
