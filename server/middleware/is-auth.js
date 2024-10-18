const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authedHeader = req.get("authorization");
  if (!authedHeader) {
    const error = new Error("No Header found.");
    error.statusCode = 401;
    throw error;
  }
  const token = authedHeader.split(" ")[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, "superSecretSecret");
  } catch (err) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error = new Error("Not Authenticated.");
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.userId;
  next();
};

//----------------------------------------------------My Solution----------------------------------------------//
// module.exports = (req, res, next) => {
//   const auhorizationHeader = req.headers.authorization;
//   let validatedToken;
//   if (!auhorizationHeader) {
//     return res.status(401).json({
//       error: true,
//       message: "Access token is missing",
//     });
//   }
//   const token = auhorizationHeader.split(" ")[1];

//   jwt.verify(token, "superSecretSecret", function(err, decoded) {
//     if (err) {
//       const error = new Error("Incorrect Token.");
//       error.statusCode = 401;
//       throw error;
//     }
//     validatedToken = decoded;
//   });

//   if (!validatedToken) {
//     const error = new Error("Invalid Token.");
//     error.statusCode = 401;
//     throw error;
//   }
//   req.userId = validatedToken.userId;
//   next();
// };

//----------------------------------------------------My Solution----------------------------------------------//
