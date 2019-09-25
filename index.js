
const express = require('express');
const mongoose = require('mongoose');
const db = 'mongodb://localhost/mvc_app';
const app =  express();

mongoose.connect(db);

const QuestionSchema = new mongoose.Schema ({

question:{
  type:String,
  required:true}
});
const Question = new mongoose.model("Question", QuestionSchema);





app.get("/", (req,res)=>{
  Question.find((err,questions)=>{
    if (err) throw err;
    res,render("index", {questions : questions});
  });


});

app.set("view engine","pug");
app.set("views", "/views");
app.post("/question",(req,res)=>{

  let question = new question ({
    question: req.body.question
  });
  question.save(err=>{
    if (err) throw err;
    res.redirect("/")
  });
});


app.listen(3000, () => { console.log(`Server listening on port ${3000}`) });
