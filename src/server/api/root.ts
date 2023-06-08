import { exampleRouter } from "@/src/server/api/routers/example";
import { createTRPCRouter } from "@/src/server/api/trpc";
import { plantRouter } from "./routers/plant";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  plant: plantRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
