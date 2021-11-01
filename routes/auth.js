var express = require("express");
const auth = require("../models/user");
var router = express.Router();
const jwt = require("jsonwebtoken");

router.get("/", function (req, res, next) {
  auth.find(function (err, data) {
    res.render("auth.twig", { data });
  });
});
router.post("/", async function (req, res, next) {
  try {
    const user = await auth.login(req.body.email, req.body.pw);
    console.log(user);
    res.redirect("/home/");
  } catch {
    res.json({ user: "Not Found" });
  }
});

// Token creation
/*const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: maxAge,
  });
};
    router.post('/signup', async function(req, res)  {
        var newUser = new auth({
            name:req.body.name,
            email: req.body.email,
            password: req.body.pw,
    
        });
        newUser.save();
        console.log(newUser)
      
        const token = jwt.sign(
			{
				id: newUser._id,
				username: newUser.name
			},
			'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'
		)
          res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
      
          res.status(201).json({ user: newUser._id , token: token});
      
      });*/
module.exports = router;
