import { createTRPCRouter, protectedProcedure } from "@/src/server/api/trpc";
import { z } from "zod";

export const plantRouter = createTRPCRouter({
  addPlant: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        id: z.string(),
        name: z.string().min(2).max(50),
        plantName: z.string().min(2).max(50),
        waterFreq: z.number(),
        notes: z.string().min(2),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const plant = await ctx.prisma.plant.create({
        data: input,
      });

      return plant;
    }),
  getPlants: protectedProcedure.query(async ({ ctx }) => {
    const plants = await ctx.prisma.plant.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      // orderBy: {
      //   createdAt: 'desc',
      // }
    });

    return plants;
  }),
  getPlant: protectedProcedure
    .input(
      z.object({
        plantId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const plant = await ctx.prisma.plant.findFirst({
        where: {
          id: input.plantId,
        },
      });

      return plant;
    }),
  updateLastWatered: protectedProcedure
    .input(
      z.object({
        plantId: z.string(),
        lastWatered: z.date(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { plantId, lastWatered } = input;
      const plant = await ctx.prisma.plant.update({
        where: { id: plantId },
        data: { lastWatered: lastWatered },
      });
      return plant;
    }),
});
