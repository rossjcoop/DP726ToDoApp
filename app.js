const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")
const bodyParser = require("body-parser")
const path = require("path")
const shortid = require('shortid')

app.engine('mustache', mustacheExpress());
app.use(express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine', 'mustache');

app.get("/", function (req, res, next) {
  res.render('index', { 
  	todos: todos, 
  	todone: todone
  });
});

let todos = []
let todone = []

app.post("/", function (req, res, next) {

  todos.push({
  	name: req.body.todo,
  	id: shortid.generate()
  })

  res.redirect("/");

})

app.post("/complete", function(req,res,next){
	const id = req.body.id

	const todo = todos.find(function(item){
		return item.id === id
	})

	todone.push(todo)

	todos = todos.filter(function(item){
		return item.id !== id
	})

	res.redirect("/")
})

app.listen(3000, function(){
  console.log("App running on port 3000")
})








