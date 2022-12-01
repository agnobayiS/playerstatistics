const express = require('express');
const flash = require('express-flash');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const session = require('express-session');
const { render } = require('ejs');

const stats = require('./queries');
const pgp = require('pg-promise')();


const local_database_url = 'postgres://siyabonga:siya@localhost:5432/game';
let connectionString = process.env.DATABASE_URL || local_database_url;


const app = express();


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
const instance = stats(db)

app.get('/', async function (req, res) {
    let ids = await instance.id();

    res.render("start", {
        ids
    })
})

// app.get('/', function (req, res) {

//     res.render("start", {

//     })
// })

app.get('/start', function (req, res) {
    res.render('start', {
    });
})
// app.get('/start', function (req,res){
//     res.render('start',{
// >>>>>>> 7b692f31fa5e0e9a703ec985039a1be3f5f43f92

//         })
//     })

app.get('/flags', async function (req, res) {

    let next = 6

    let ids = await instance.flagid();
    console.log(ids[0].id);

    setTimeout(() => {
        console.log(++next);
        ++next;
    }, 25000)
    console.log(ids);


    let data = await instance.flagHint(next);

    console.log(data);
    console.log("---------+");
    res.render('flags', {
        data
    })
})

// app.get('/tables',async function (req, res) {



//     res.render('tables', {
//         data
//     })
// })


// app.post("/", function (req, res) {
// =======
// app.get('/tables', function (req,res){
//     res.render('tables',{

//     })
// })

// app.get('/tables', function (req,res){
//     res.render('tables',{

//     })
// })


// app.post("/",function (req,res){
// >>>>>>> 7b692f31fa5e0e9a703ec985039a1be3f5f43f92
//     res.redirect('scan')
// })

app.get('/scan', async function (req, res) {
    let next = req.query.question_id;

    // let ids = await instance.id();

    let data = await instance.playersHint(next);

    res.render('scan', {
        data
    })

});
app.get('/api/scan', async function (req, res) {
    let next = req.query.question_id;

    // let ids = await instance.id();

    let data = await instance.playersHint(next);

    res.json({
        data
    })



    // res.render('scan', {

    // })

});






const PORT = process.env.PORT || 3155;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
});