import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    phone: { type: Number },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);
