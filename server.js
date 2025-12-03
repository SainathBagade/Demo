import express from "express"
import Sum from "./sum.js"
const app=express();
const PORT=8080;



app.listen(PORT ,()=>{
    console.log("Server is running on Port :- 8080");
})

app.get("/home",async(req,res) => {
    res.json({
        msg:"I'm Root!"
    })
})

app.get("/getSum/:a/:b",async(req,res) => {
    let {a,b}=req.params;

    res.json({
        ans:Sum(parseInt(a),parseInt(b))
    })
})