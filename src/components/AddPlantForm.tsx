import { Button } from "@/src/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveLeft } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import * as z from "zod";
import { api } from "../utils/api";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  plantName: z.string().min(2).max(50),
  waterFreq: z.coerce.number(),
  notes: z.string().min(2),
});

// This should be a protected route and userId passed as a prop
const AddPlantForm = () => {
  const { data } = useSession();
  const { toast } = useToast();
  const addPlant = api.plant.addPlant.useMutation();
  const userId = data?.user.id as string;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      plantName: "",
      waterFreq: 7,
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const id = uuid();
    const { name, plantName, waterFreq, notes } = values;

    addPlant.mutate({ id, userId, name, plantName, waterFreq, notes });

    toast({
      title: "Plant added!",
      description: "A new plant has been added to your collection",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plant Name</FormLabel>
              <FormControl>
                <Input placeholder="Plant Name" {...field} />
              </FormControl>
              <FormDescription>
                This is your personal plant name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="plantName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Scientific Name</FormLabel>
              <FormControl>
                <Input placeholder="Scientific Plant Name" {...field} />
              </FormControl>
              <FormDescription>
                This is your plant&apos;s scientific name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="waterFreq"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Water (Every X days)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="7" {...field} />
              </FormControl>
              <FormDescription>
                How often in days do you expect to water your plant
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Soon to be root bound" {...field} />
              </FormControl>
              <FormDescription>
                Any additional information about your plant
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <Button asChild variant="outline">
            <Link href={"/dashboard"}>
              <MoveLeft />
            </Link>
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default AddPlantForm;
