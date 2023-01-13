const express = require("express");
const cors = require("cors");
const userRoute=require('./routes/v1/user.route')
const app = express();
const port = 5009;
app.use('/api/v1/user',userRoute);
app.get("/", async (req, res) => {
  res.send(`Server is running at port ${port}`);
});
app.listen(port, () => console.log(`server is running on port ${port}`));
