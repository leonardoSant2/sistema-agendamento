const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const appointmentService = require("./services/AppointmentService");


app.use(express.static("public"));
app.use(express.static("./node_modules/bootstrap/dist/css"))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

mongoose.connect("mongodb://127.0.0.1/agendamento");

app.get("/", (req, res) => {
    res.send("Oi!")
});

app.get("/cadastro", (req, res) => {
    res.render("create");
})

app.post("/create", async (req, res) => {

    var status = await appointmentService.Create(
        req.body.name,
        req.body.email,
        req.body.description,
        req.body.cpf,
        req.body.date,
        req.body.time,
    )
    if(status){
        res.redirect("/")
    }else{
        res.send("Ocorreu uma falha")
    }
});

app.listen(8080, () => {});