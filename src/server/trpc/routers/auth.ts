import { z } from "zod";
import { publicProcedure, router } from "../index";
import { User } from "../../db/models/user.model";
import { TRPCError } from "@trpc/server";
import { signupSchema } from "@/lib/utils/zodSchemas";

export const authRouter = router({
  signup: publicProcedure.input(signupSchema).mutation(async ({ input }) => {
    try {
      const existingUser = await User.findOne({ email: input.email });
      if (existingUser) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exists",
        });
      }

      const user = await User.create(input);

      return {
        status: "success",
        data: {
          id: user._id,
          email: user.email,
          name: user.name,
        },
      };
    } catch (error) {
      if (error instanceof TRPCError) throw error;
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong",
      });
    }
  }),
});
