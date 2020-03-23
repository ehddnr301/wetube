import mongoose, { PassportLocalSchema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

export interface IUser extends mongoose.Document {
  _id: string;
  avatarUrl: string;
  email: string;
  githubId: number;
  kakaoId: number;
  name: string;
}

const UserSchema: mongoose.PassportLocalSchema = new mongoose.Schema({
  avatarUrl: String,
  comments: [
    {
      ref: "Comment",
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  email: String,
  githubId: Number,
  kakaoId: Number,
  name: String,
  videos: [
    {
      ref: "Video",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model<IUser & mongoose.Document & PassportLocalSchema>(
  "User",
  UserSchema
);

export default model;
