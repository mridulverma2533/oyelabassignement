const router=require("express").Router();

const controller=require("../controller/admincontroller");

router.post("/register",controller.register);
router.post("/login",controller.login)
router.post("/object",controller.object)
router.get("/findall",controller.findall)
router.get("/find/:id",controller.find)








module.exports=router;