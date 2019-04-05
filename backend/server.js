const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const User = require("./user");
const { ObjectId } = require("mongodb");
const mongodb = require("mongodb");
const API_PORT = 3001;
const app = express();

//setup whitelist for http request
//When upoad to server, make sure this is live and prevent un indentify request
const whitelist = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:5555"
];
var corsOptions = {
  origin: function(origin, callback) {
    if (origin == undefined || whitelist.indexOf(origin) != -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
app.use(cors(corsOptions));

const router = express.Router();

// this is our MongoDB database
const dbRoute =
  "mongodb://ubplatform:19981002@cluster0-shard-00-00-oxrms.mongodb.net:27017,cluster0-shard-00-01-oxrms.mongodb.net:27017,cluster0-shard-00-02-oxrms.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

//this method overwrites existing data in our database
router.post("/updateByIdData", (req, res) => {
  Data.findByIdAndUpdate(req.body.id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

//this method removes existing data in our database
router.delete("/deleteByIdData", (req, res) => {
  Data.findByIdAndDelete(req.body.id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  }).setOptions({ single: true });
});

// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();
  const { title, price, course, url, owner } = req.body;
  data.title = title;
  data.price = price;
  data.course = course;
  data.owner = owner;
  data.url = url;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.post("/isUserExist", (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) return res.json({ error: err });
    if (user != null) return res.json({ message: "User Already Exist." });
    return res.json({ message: "User don't exist." });
  });
});

//test
// this method adds new data in our database
router.post("/putUser", (req, res) => {
  User.findOne({ username: req.body.username }, (err, users) => {
    if (err) return res.json({ success: false, error: err });
    if (users != null)
      return res.json({ success: false, message: "User already exist" });

    let user = new User();
    const { username, email, password, firstname, lastname } = req.body;
    user.username = username;
    user.email = email;
    user.firstname = firstname;
    user.lastname = lastname;
    user.password = password;
    user.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, message: "User Register" });
    });
  });
});

router.post("/unregister", (req, res) => {
  User.findOne(
    { username: req.body.username, password: req.body.password },
    (err, user) => {
      if (err) return res.json({ success: false, error: err });
      if (user == null)
        return res.json({ success: false, message: "user not found." });
      Data.find({ owner: user.username }, (err, data) => {
        if (err) return res.json({ success: false, error: err });
        data.map(book => {
          Data.findByIdAndDelete(book._id, (err, res) => {
            if (err)
              return res.json({ success: false, message: "unable to delete" });
          });
        });
        return res.json({ success: true, message: "delete all books." });
      });
    }
  );
});

router.post("/login", (req, res) => {
  User.findOne(
    { username: req.body.username, password: req.body.password },
    function(err, user) {
      if (err) return res.json({ success: false, error: err });
      if (user == null)
        return res.json({ success: false, message: "User Don't Exist." });
      return res.json({ success: true, user: user });
    }
  );
});

router.post("/search", (req, res) => {
  Data.find(req.body, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/guessYouLike", (req, res) => {
  Data.find(req.body, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    let random = Math.floor(Math.random() * Math.floor(3));
    console.log("all books: " + data[random]._id);
    return res.json({ success: true, data: data[random] });
  });
});

//put interests in a user
router.post("/putInterests", (req, res) => {
  User.findOne({ username: req.body.username }, (err, users) => {
    if (err) return res.json({ success: false, error: err });

    if (users.interestsList.includes(req.body.course)) {
      console.log("found tha english already added!!!!!!!!");
      return res.json({ success: false, message: "Interests already exist" });
    }
    users.interestsList.push(req.body.course);
    users.save(err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, message: "Interests added" });
    });
  });
});

//get user's interests list
router.post("/getInterests", (req, res) => {
  User.findOne({ username: req.body.username }, (err, users) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: users.interestsList });
  });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
