const express = require('express');
const router=new express.Router();
const StudentModel = require(".././DB/models/student");
router.get("/", (req, res) => {
    res.send("new student..");
});
//post
router.post("/students", async (req, res) => {
    try {
        const user = new StudentModel(req.body);
        console.log(req.body);
        const result = await user.save();
        res.status(201).send(result);
    }
    catch (err) {
        res.status(400).send(err);
    }
});
//get
router.get("/students",async(req,res)=>{
    try{
      const data=await  StudentModel.find();
      console.log(data);
      res.status(201).send(data);
    }
    catch(err){
        res.status(400).send(err);
    }
});
//individual record
router.get("/students/:id",async(req, res)=>{
    try{
     const id=req.params.id;
     const data=await StudentModel.findById({_id:id});
     if(!data){
         return res.status(404).send();
     }
     else{
        res.status(201).send(data);
        console.log(data);
     }
     
    }
    catch(err){
      res.status(400).send(err);
    }
});
//retriving records using email
router.get("/students/:email",async(req, res)=>{
  try{
    const email=req.params.email;
    const data=await StudentModel.find({email:email});
    if(!data){
        return res.status(404).send();
    }
    else{
        res.status(201).send(data);
    }
  }
  catch(err){
    res.status(400).send(err);
  }
});
//patch
//update records using id
router.patch("/students/:id",async(req, res)=>{
    try{
     const id=req.params.id;
     const data =await StudentModel.findByIdAndUpdate({_id:id},req.body,{new:true});
     res.send(data);
    }
    catch(err){
       res.status(400).send(err);
    }
   
});
// update records using email
router.patch("/students/:email",async(req,res)=>{
 try{
  const email=req.params.email;
  const data=await StudentModel.findOneAndUpdate({email:email},req.body,{new:true});
  res.send(data);
 }
 catch(err){
     res.status(400).send(err);
 }
});
//delete records
router.delete("/students/:id",async(req,res)=>{
    try{
        const id=req.params.id;
      const data=await StudentModel.findByIdAndDelete({_id:id});
      if(!id){
        return res.status(404).send();
      }
        res.status(201).send(data);

    
    }
    catch(err){
      res.status(400).send(err);
    }
});

module.exports =router;