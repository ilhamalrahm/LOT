const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieparser= require('cookie-parser');
const ConnectDB = require("./Connection/ConnectDb");
const auth=require("./Routes/user")

const port = process.env.PORT || 5002;

// connect to the database
ConnectDB();

// use express middleware
app.use(cors());
app.use(cookieparser());
app.use(express.json({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}));

// routes related to user and user auth
app.use("/api/user", require('./Routes/user'));



// listens to the app on PORT
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});
