import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/src/server/api/trpc";

export const plantRouter = createTRPCRouter({
  // hello: publicProcedure
  //   .input(z.object({ text: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input.text}`,
  //     };
  //   }),

  addPlant: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        id: z.string(),
        name: z.string().min(2).max(50),
        plantName: z.string().min(2).max(50),
        water: z.number(),
        notes: z.string().min(2),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const plant = await ctx.prisma.plant.create({
        data: input,
      });

      return plant;
    }),

  // getSecretMessage: protectedProcedure.query(() => {
  //   return "you can now see this secret message!";
  // }),
});
