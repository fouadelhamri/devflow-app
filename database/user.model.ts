import { Types, Schema, models, model, Document } from "mongoose";

// TODO: can also usethis to generate TS interface=>
// type IUber = InferSchemaType<typeof UserSchema>;
export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputation?: number;
  saved: Types.ObjectId[];
  joinedAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  bio: { type: String },
  picture: { type: String, required: true },
  location: { type: String },
  portfolioWebsite: { type: String },
  reputation: { type: Number, default: 0 },
  saved: [{ type: Types.ObjectId, ref: "Question" }],
  joinedAt: { type: Date, default: Date.now },
});
const User = models.User || model("User", UserSchema);

export default User;
