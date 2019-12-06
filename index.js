const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'keyboard cat5 run all 0v3r',
    resave: false,
    saveUninitialized: true
}));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

let brandList = [];


app.post("/api/brand_add", function (req, res) {
    brandList.push(req.body.brand_name);
    res.json({
        status: "success"
    })
})
app.get("/api/brand_list", function (req, res) {

    res.json(brandList)
})

app.post("/api/brand/:brandname/color/:colorname", function(req, res){
const brand = req.body.brandname
const color = req.body.colorname

})

app.get("/api/brand/:brandname/color/:colorname", function(req, res){

    res.json({brand, color})
})

const PORT = process.env.PORT || 3010;

app.listen(PORT, function () {
    console.log('started on: ', this.address().port);
});