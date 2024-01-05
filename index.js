import express from 'express';
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./src/routes/user.js";
import resourceRouter from "./src/routes/resource.js";
const app = express();

app.use(express.json());

console.log(process.env.MONGO_CONNECTION)

mongoose
.connect(process.env.MONGO_CONNECTION)
.then(() => console.log("Conected to DB!"))
.catch((err)=> {
	console.log(err);
});

app.use(userRouter);
app.use(resourceRouter);

app.listen(process.env.PORT);