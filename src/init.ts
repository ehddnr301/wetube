import app from "./app";

const PORT = 4000;

const handleListening = () =>
  // tslint:disable-next-line: no-console
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
