import express from "express";
const app= express();
const port= 3000;


app.set("view engine","ejs")
app.use(express.static("public")); 

app.get("/",(req,res) =>{
    const data ={
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items:["apple","banana","cherry"],
        htmlContent: "<strong>This is some Strong text.</strong>"
    };
    res.render("index",data);
});
app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
});