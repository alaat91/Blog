const express = require("express");

// const feedRoutes = require("./router/feed");
// const authRoutes = require("./router/auth");
// const userRoutes = require("./router/user");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const { clearImage } = require("./util/helper");
const compression = require("compression");
const rfs = require("rotating-file-stream");
const morgan = require("morgan");
require("dotenv").config();

// GraphQL
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphQL/schema");
const graphqlResolver = require("./graphQL/resolvers");

const auth = require("./middleware/auth");

const app = express();

const fileStorge = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// compress res for deployment porpuses
app.use(compression());

//app.use(bodyParser.urlencoded()); // used when have x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

// to enable file storage of type 'image'
app.use(
  multer({ storage: fileStorge, fileFilter: fileFilter }).single("image")
);

// To serve static files
app.use("/images", express.static(path.join(__dirname, "images")));

// create a rotating write stream
const accessLogStream = rfs.createStream(
  "access.log",
  {
    interval: "1M", // rotate daily
    path: path.join(__dirname, "log"),
  },
  {
    flags: "a",
  }
);

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

// Below Middlewares To allow for CORS requests.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE "
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Private-Network", "true");

  next();
});

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' *"
  );
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
// Above Middlewares To allow for CORS requests.

// To pass jwt token to other gQL queries
app.use(auth);

// REST endpoint to upload files
app.put("/post-image", (req, res, next) => {
  if (!req.isAuth) {
    throw new Error("Not authenticated!");
  }
  if (!req.file) {
    return res.status(200).json({ message: "No file provided!" });
  }
  if (req.body.oldPath) {
    clearImage(req.body.oldPath);
  }
  return res
    .status(201)
    .json({ message: "Image uploaded", filePath: req.file.path });
});
// init graphQL routes
app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    customFormatErrorFn(err) {
      // Centralized error handeler in graphQL
      if (!err.originalError) {
        return err;
      }
      const data = err.originalError.data;
      const message = err.message || "An error occured!";
      const code = err.originalError.code || 500;
      return { message: message, status: code, data: data };
    },
  })
);
// My App Middlewares
// app.use("/user", userRoutes);
// app.use("/feed", feedRoutes);
// app.use("/auth", authRoutes);

// centralized error handling middleware
app.use((error, req, res, next) => {
  console.log("Error center Midware:", error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

// My DB connection:
mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    const server = app.listen(process.env.PORT || 8081);
    // const io = require("./socket").init(server);
    // io.on("connection", (socket) => {
    //   console.log("Client connected!");
    // });
  })
  .catch((err) => {
    console.log(err);
  });
