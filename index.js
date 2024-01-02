import express from 'express';
import mongoose from "mongoose";
import resourceRouter from "./src/routes/resource.js";
const app = express();

app.use(express.json());

mongoose
.connect(
  'mongodb+srv://Elena5555:Elena555@cluster0.w6isa2d.mongodb.net/resources-api'
)
.then(() => console.log("Conected to DB!"))
.catch((err)=> {
    console.log(err);
});

app.use(resourceRouter);

app.listen(3000);