const express = require("express");
const app = express();

const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");


let campgrounds = [
		{name: "123 creek", image: "https://www.photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_960.jpg&user=Free-Photos"},
		{name: "456 hill", image: "https://www.photosforclass.com/download/pixabay-1189929?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1dd4a4350a514f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_960.jpg&user=Noel_Bauza"},
		{name: "789 rest", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_960.jpg&user=Pexels"}
	];

app.get("/", (req,res)=>{

	res.render("landing.ejs");
});


app.get("/campgrounds", (req,res)=>{
	


	res.render("campgrounds", {campgrounds:campgrounds});

});



app.post("/campgrounds", (req,res)=>{


	const name = req.body.name;

	const image = req.body.image;

	let newCampground = {name:name, image:image};

	campgrounds.push(newCampground);

	res.redirect("/campgrounds");

	//get form data, and add object to campgrounds array
	//redirect 


});


app.get("/campgrounds/new", (req,res)=>{

	res.render("new");


});


app.listen(3000, ()=>{
	console.log("server has started");
});