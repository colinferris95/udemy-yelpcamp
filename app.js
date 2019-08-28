const express = require("express");
const app = express();

const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");


let campgrounds = [
		{name: "123 creek", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},
		{name: "456 hill", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},
		{name: "789 rest", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},
		{name: "123 creek", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},
		{name: "456 hill", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"},
		{name: "789 rest", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"}
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