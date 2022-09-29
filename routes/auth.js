const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SaltKey
      ).toString(),
    });
    const { password, ...u } = user.dataValues;
    res.status = 200;
    res.json(u);
  } catch (error) {
    res.status = 500;
    res.json(error);
  }

});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const u= await User.findOne({
        where:{
            email:req.body.email
        }
      });

    const user=u.dataValues;
    const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.SaltKey
      );
    
      //Authenticating  passwaord.
      const pass = hashedPassword.toString(CryptoJS.enc.Utf8);
      pass !== req.body.password &&
      res.status(401).json({
        err: "Wrong Password",
      });

      //Generating jwt Token.
      const accessToken = jwt.sign(
        {
          id: user.id,
          name: user.name,
          email:user.email,
        },
        process.env.JWT_Secret_Key,
        {
          expiresIn: "1d",
        }
      );
      //Destructuring object to hide confidential data.
      const { password, ...others } = user;
        res.status(200).json({
          ...others,
          accessToken,
        });

  } catch (error) {
    console.log(error);
    res.status(401).json({
        err: "User Not Found",
        error:error
      });
  }
});

module.exports = router;
