import express from "express";

const app = express();
const port = 3001;

app.set("view engine","ejs")
app.use(express.static("public"));   

app.get("/", (req,res) => {
    const today =new Date();
    const day = today.getDay();
    
    let type="a weekday";
    let adv="it's time to work hard";

    if(day ===0 || day ===6){
        type="the weekend";
        adv="it's time to have some fun";  
    }
    res.render( "index",{
        dayType: type,
        advice: adv,
    });
});

app.listen(port, () => {
    console.log(`Serving running on port ${port}`);
});