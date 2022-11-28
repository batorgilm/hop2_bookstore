import express from "express";
import mongoose from "mongoose";
import routes from "./routes";
const PORT = 8080;
const MONGO_URI =
  "mongodb+srv://admin:admin123@hop-2.xrzll2f.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());

app.listen(PORT, async () => {
  try {
    mongoose.connect(MONGO_URI, {}).then(() => {
      console.log("Connected DB");
    });
  } catch (error) {
    console.error("Could not connect to DB");
    process.exit(1);
  }
  routes(app);
});
