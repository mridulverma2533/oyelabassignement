const User = require("../models/adminmodel")

//task1 and task3
exports.register=async(req,res)=>{
    try{
        const result = await User.findOneAndUpdate({email:req.body.email},{$set:{name:req.body.name}},{new:true})
        if(result){
            res.send(result)
        }else{
        const data = new User({
            name:req.body.name,
            mobile: req.body.mobile,
            email:req.body.email
            
        });
        const result = await data.save()
        res.send(result)
        }

    }catch(e){
        console.log(e);
        res.send(e)
    }
    


    },
    exports.login=async(req,res)=>{
       try{
           const {mobile}=req.body
           const result = await User.findOne({mobile:mobile})
           res.send(result)

       }catch(e){
           console.log(e);
           res.send(e)
       }
    },
 // task4 making a object api
 exports.object=async(req,res)=>{
     try{
      const result = {
          name:req.body.name,
          gender:req.body.gender,
          studentname:req.body.studentname,
          email:req.body.email
      } 
      res.send(result)
     }catch(e){
         console.log(e);
     }
 },
 
 exports.findall=async(req,res)=>{
     try{
         const data = await User.find()
         res.status(200).json(data)

     }catch(e){
         console.log(e);
         res.send(e)
     }
 },
 exports.find = async(req,res)=>{
     try{
         const _id = req.params.id
         const data = await User.findOne({_id:_id})
         res.status(200).json(data)

     }catch(e){
         console.log(e);
         res.status(500).json(e)
     }
 }

