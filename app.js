const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req,res)=>{

	res.render("landing.ejs");
});


app.get("/campgrounds", (req,res)=>{
	let campgrounds = [
		{name: "123 creek", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732973d5974ecc5a_340.jpg"},
		{name: "456 hill", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732973d5974ecc5a_340.jpg"},
		{name: "789 rest", image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732973d5974ecc5a_340.jpg"}
	];


	res.render("campgrounds", {campgrounds:campgrounds});

});


app.listen(3000, ()=>{
	console.log("server has started");
});