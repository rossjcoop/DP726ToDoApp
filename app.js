const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")
const bodyParser = require("body-parser")
const path = require("path")

app.engine('mustache', mustacheExpress());
app.use(express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine', 'mustache');

app.get("/", function (req, res, next) {
  res.render('index', { todos: todos });
});

let todos = ["Clean up living room", "clean garage", "eat cheese"]
let donetodos = ["Mow Lawn", "Shave cat"]


console.log(donetodos)



app.post("/", function (req, res, next) {
  //I need to parse the array each time and add it back to a list.



  //When an item is clicked "Mark complete", move that item to the complete list possibly use an event listener.



  todos.push(req.body.todo)
  res.redirect("/");

})





app.listen(3000, function(){
  console.log("App running on port 3000")
})



function itemRemove(item){
	
}




