const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req,res)=>{

	res.render("landing.ejs");
})

app.listen(3000, ()=>{
	console.log("server has started");
});