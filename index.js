const express = require('express');
const flash = require('express-flash');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const session = require('express-session');
const { render } = require('ejs');
const daily = require('./queries');
const pgp = require('pg-promise')();


const local_database_url = 'postgres://siyabonga:siya@localhost:5432/daily_expenses';
let connectionString = process.env.DATABASE_URL || local_database_url;


const app = express();


// const uid = new ShortUniqueId({ length: 6 });


const config = {
    connectionString
}
if (process.env.NODE_ENV == "production") {

    config.ssl = {
        rejectUnauthorized: false
    }
}

const db = pgp(config);

app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static("public"))


app.use(session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true
}));


app.use(flash());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,


    })
);


app.get('/', function (req, res) {

    res.render("start", {

    })
})

app.get('./first', function (req,res){
    res.render('first',{

    })
})


// app.post("/",function (req,res){
//     res.redirect('scan')
// })

app.get('/scan', async function (req, res) {
  
  res.render('scan',{

  })
        
});






const PORT = process.env.PORT || 3155;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
});