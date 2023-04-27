const express = require("express");
 const workersSchema = require("../models/workersSchema");
const recordRoutes = express.Router();

 
// This section will help you get a list of all the records.

recordRoutes.post("/workers",(req,res)=>{
  const w = workersSchema(req.body)
  
    w.save()
  .then((data) =>res.json(data))
  .catch((err) => res.json({message:err}))
})

recordRoutes.get("/workers",(req,res)=>{
  workersSchema.find()
  .then((data) =>res.json(data))
  .catch((err) => res.json({message:err}))
})

recordRoutes.get("/workers/:id",(req,res)=>{
  console.log(req.params)
  const {id} = req.params
  workersSchema.findOne({idEmpleado:id})
  .then((data) =>res.json(data))
  .catch((err) => res.json({message:err}))
})
module.exports = recordRoutes;