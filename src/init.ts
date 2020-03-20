import "./db";
import app from "./app";
import * as dotenv from "dotenv";
dotenv.config();
import "./models/Video";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  // tslint:disable-next-line: no-console
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
