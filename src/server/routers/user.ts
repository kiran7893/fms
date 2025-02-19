// server/routers/user.ts
import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { User } from "../models/user";

export const userRouter = router({
  test: publicProcedure.query(async () => {
    return {
      message: "tRPC is working!",
    };
  }),
});
