import express from "express";
import bodyParser from "body-parser";
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let todoItems = [];
let todoiTems = [];

app.get("/",(req,res) => {
    
const currentDate = new Date();

const options = { 
  weekday: 'long', 
  month: 'long',   
  day: 'numeric'   
};

const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentDate);

    res.render("index.ejs",{formattedDate,todoItems});
});

app.get("/work",(req,res) => {
  res.render("work.ejs",{todoiTems})
});

app.post("/work",(req,res) => {
  const kk = req.body.neWItem;
  todoiTems.push(kk);
  res.redirect("/work")
})

app.post('/add', (req, res) => {
    const newItem = req.body.newItem;
    todoItems.push(newItem);
    res.redirect('/');
  });

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});