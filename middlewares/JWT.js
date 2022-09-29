const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_Secret_Key, (err, user) => {
      if (err) {
        res.status(403).json("Token is not valid");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    return res.status(401).json("Your Not authorized");
  }
};

const VerifyTokenAndAuth = (req, res, next) => {
  VerifyToken(req, res, () => {
    if (req.user.id === req.params.id) {
      next();
    } else {
      res.status(403).json("Your not Authorized to do that!");
    }
  });
};


module.exports = { VerifyToken, VerifyTokenAndAuth};
