const express = require("express"); //carregando o Express
const app = express();

const bodyParser = require("body-parser"); //bodyParser que é responsavel p/ pegar dados dos metodos
const User = require("./users/User");

const connection = require("./database/database"); //conexão com o banco

const usersController = require("./users/UsersController");

connection
    .authenticate()
    .then(() => {
        console.log("Conexão efetuada com sucesso")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })


//Setando EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//decodifica mensagem recebida no metodo para js
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res)=>{
    res.render('index');
});

app.use("/", usersController);

app.listen(4000, ()=>{
    console.log("app rodando");
});