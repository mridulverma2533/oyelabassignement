const router=require("express").Router();

const controller=require("../controller/admincontroller");

router.post("/register",controller.register);
router.post("/login",controller.login)
router.post("/object",controller.object)








module.exports=router;