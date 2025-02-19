// server/routers/user.ts
import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { User } from "../models/user";

export const userRouter = router({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
      })
    )
    .mutation(async ({ input }) => {
      const user = new User(input);
      await user.save();
      return { message: "User created successfully!" };
    }),
});
