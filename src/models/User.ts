import * as mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  avatarUrl: string;
  email: string;
  facebookId: number;
  githubId: number;
  kakaoId: number;
  name: string;
}

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema({
  avatarUrl: String,
  comments: [
    {
      ref: "Comment",
      type: mongoose.Schema.Types.ObjectId
    }
  ],
  email: String,
  facebookId: Number,
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

const model = mongoose.model<IUser & mongoose.Document>("User", userSchema);

export default model;
