import { User } from "@/app/model/userModel";
import mongoose from "mongoose";

export async function POST(req) {
  const body = await req.json();
  mongoose.connect(
    "mongodb+srv://huynhminhquan2706:8dn4KAuLbd6CyTcQ@huynhminhquan.zdbqu9w.mongodb.net/api_education"
  );

  const createdUser = await User.create(body);

  return Response.json(createdUser);
}
