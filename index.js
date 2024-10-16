const express=require("express");
const app= express();
const cors = require("cors");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const port = process.env.PORT ||7777;

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());

app.get("/" , (req,res)=>{
  res.send("Hello")
})




    const users = [];

    const secretkey = "your-secret-key";

    app.post("/register",async(req,res)=>{
      const{username,password} = req.body;
      const hashedPassword = await bcrypt.hash(password,10);
      users.push({username,password:hashedPassword});
     res.status(201).json({message:"user registered successfully"});
    });

    app.post("/login", async(req,res)=>{
      try{
        const { username, password} = req.body;
        const user = users.find((user)=>user.username===username);
        if(user){
          const isPasswordValid = await bcrypt.compare(password, user.password);
          if(isPasswordValid){
            const token = jwt.sign({username},secretkey,{expiresIn:"1h"});
            res.json({token});
          }else{
            res.status(400).json({message:"Invalid username or password"});
          }
        }else{
          res.status(400).json({message:"Invalid username or password"});
        }
      }catch (error){
         res.status(500).send(error.message);
      }
    });

   
 app.listen(port,()=>{
  console.log(`Server running on ${port}`);
 });
