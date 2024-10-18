const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authedHeader = req.get("authorization");
  if (!authedHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authedHeader.split(" ")[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, "superSecretSecret");
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.userId = decodedToken.userId;
  req.isAuth = true;
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
