const User = require("../models/User");
const router = require("express").Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    
    const users = await User.findAll({
      attributes:['id','name']
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.json(users);

  } catch (error) {

    res.statusCode = 500;
    console.log(error);
    res.json(error);
  }
});
/**
 * GET specific user
 */
router.get("/:id", async(req, res, next)=>{
    try {
        const u=await User.findByPk(req.params.id);
        const {password,...user}=u.dataValues;

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(user);
    } catch (error) {
      res.statusCode = 500;
      console.log(error);
      res.json(error);
    }
});

//To register new user.
router.post("/add", async(req, res) => {
  
  try {

      const user=await User.create(req.body);

      res.status = 200;
      res.json(user);
  } catch (error) {
      res.status=500;
      res.json(error);
  }
});

//To update user
router.put('/:id',async (req, res)=>{
  try {
    const user=await User.update(req.body,{
      where:{
        id:req.params.id
      }
    });


    res.status = 200;
    res.json(user);

  } catch (error) {

      res.status=500;
      res.json(error);
  }
});

//Delete specific user by id
router.delete('/:id', async(req,res)=>{
  try {
      const u=await User.destroy({
        where:{
          id:req.params.id
        }
      });
      res.status = 200;
      res.json(u);
  } catch (error) {
      res.status=500;
      res.json(error);
  }
});

module.exports = router;
