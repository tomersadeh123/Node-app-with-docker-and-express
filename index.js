const express = require("express");
const mongoose = require("mongoose");
const app = express();
const url = 'mongodb://tomer:mypassword@mongo-app:27017/?authSource=admin'
const postRouter = require("./routes/postRoutes")
const userRouter = require("./routes/userRoutes")

const connectWithRetry = () =>{
    mongoose.connect(url)
    .then(() => console.log("succesfully connected to DB"))
    .catch((e) => console.log(e))
    setTimeout(connectWithRetry,5000)
}

connectWithRetry();

app.use(express.json());
app.get("/", (req,res) => {
    res.send("<h2> hi there !!!!</h2>");
});

app.use("/api/v1/posts",postRouter);
app.use("/api/v1/users",userRouter);
/* שורה זו אומרת שאם הערך נמצא אז נשים אותו ואם הוא ריק נשים 3000*/
const port = process.env.port || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
