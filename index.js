const express = require("express");
const cors = require("cors");
const userRoute=require('./routes/v1/user.route');
const { connectToServer } = require("./utils/dbConnect");
const errorHandler = require("./middleware/errorHandler");
const app = express();
const port = 5009;
app.use(express.json());

connectToServer((err)=>{
    if(!err){
        app.listen(port, () => console.log(`server is running on port ${port}`));
    }
    else{
        console.log('db error',err);
    }
});
app.use('/api/v1/user',userRoute);
app.use(errorHandler);
app.get("/", async (req, res) => {
  res.send(`Server is running at port ${port}`);
});

