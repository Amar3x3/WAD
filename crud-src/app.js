const express= require('express');
const mongoose = require('mongoose');
const user = require('./schema.js');
const url = 'mongodb://localhost:27017/crud_practice2'

mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;
con.on('open',function(){
    console.log("connected");
})

const app = express();
app.use(express.json());
app.listen(9000,function(){
    console.log("running");
})

app.post('/',async(req,res)=>{
    const newuser = new user({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        age:req.body.age
    })
    try{
        const u = await newuser.save();
        res.json(u)
    }
    catch{
        console.log("post error")
    }
})
app.get('/',async(req,res)=>{
    try{
        const all =await user.find();
        res.json(all)
    }catch{
        console.log("all get error")
    }
})
app.get('/:id',async(req,res)=>{
    try{
        const oneuser =await user.findById(req.params.id);
        res.json(oneuser)
    }catch{
        console.log("one get error")
    }
})
app.put('/:id',async(req,res)=>{
    try{
        const oneuser =await user.findById(req.params.id);
        oneuser.name=req.body.name
        oneuser.email=req.body.email
        oneuser.password=req.body.password
        oneuser.age=req.body.age

        const u = oneuser.save();
        res.json(u)
    }
    catch{
        console.log("put error");
    }
})
app.delete('/:id',async(req,res)=>{
    try{
        const del = await user.findById(req.params.id);
        del.deleteOne();
        res.send("deleted")
    }
    catch{
        console.log("delete error")
    }
})
