import { supabase } from "@/src/server/supabase/supabaseClient";
import { Loader2, PlusIcon } from "lucide-react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useToast } from "./ui/use-toast";

interface AddPhotoProps {
  userId: string;
  plantId: string;
  getImages: () => void;
}

const AddPhoto = ({ userId, plantId, getImages }: AddPhotoProps) => {
  const [uploading, setUploading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();

  const uploadPhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload!");
      } else {
        const file = event.target.files[0];
        const fileExt = file?.name.split(".").pop();
        const fileName = `${uuid()}.${fileExt}`;
        const filePath = `${userId}/${plantId}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("plants")
          .upload(filePath, file!);

        if (uploadError) {
          throw uploadError;
        }
      }
    } catch (error) {
      alert(error);
    } finally {
      setUploading(false);
      setOpen(false);
      getImages();
      toast({
        title: "Upload successful!",
        description: "A new photo has been added to your plant's photo log",
      });
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="flex h-[333px] w-[250px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-50 object-cover shadow-sm transition-all hover:bg-slate-200">
            <PlusIcon size={96} />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Upload a new photo</DialogTitle>
            <DialogDescription>
              Upload a new photo to your photo log
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Photo
              </Label>
              <Input
                id="name"
                type="file"
                className="col-span-3"
                onChange={(e) => uploadPhoto(e)}
              />
            </div>
          </div>
          <DialogFooter className="">
            {uploading ? (
              <span className="text-xs"> Uploading ... </span>
            ) : (
              <div className="p-2" />
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddPhoto;

//
