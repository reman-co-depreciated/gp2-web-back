const express = require("express");
const app = express();
const dotenv = require("dotenv");

const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const reviewRoute = require("./routes/reviewRoute");
const stripeRoute = require("./routes/stripe");
const questionRoute = require("./routes/questionRoute");
const researchRoute = require("./routes/researchRoute");
const statsRoute = require("./routes/statsRoute");
const cors = require("cors");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute); 
app.use("/users", userRoute); 
app.use("/products", productRoute); 
app.use("/orders", orderRoute); 
app.use("/reviews", reviewRoute); 
app.use("/checkout", stripeRoute);
app.use("/questions", questionRoute);
app.use("/stats", statsRoute);
app.use("/research", researchRoute);

app.get("/", function (req, res) {
    res.send('<h1>Reman Co. web app api and backend!</h1>  <h4>checkout the site at <a href="https://reman.co">reman.co</a></h4>  <p>version: 1.20</p>');
});
app.get("/health", (req, res) => {
    res.send();
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`backend server is running on port ${process.env.PORT || 5000}`); 
}); 

module.exports = {app}