//Applications

const express = require("express")
const morgan = require("morgan")
const bodyparser = require("body-parser")
const layout = require("./views/layout")

const app = express();


app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"))
app.use(bodyparser.urlencoded({extended: false}))

app.get("/",(req, res, next) => {
    res.send(layout(''))
})


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});



