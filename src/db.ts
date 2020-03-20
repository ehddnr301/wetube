import * as mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

// tslint:disable-next-line: no-console
const handleOpen = () => console.log("✅Connected to DB");
const handleError = (error: Error) =>
  // tslint:disable-next-line: no-console
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);