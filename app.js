var express = require('express');
var app = express();
const bodyParser = require("body-parser");
var {mongoose} = require("./db/connect");
var {User} = require("./models/user");
var session = require('express-session');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret:'dasdnjnjfnsdnf3bn8wu3rjn2i3urn',resave:false,saveUninitialized:true}));
// var popup = require('popups');
app.set("view engine","ejs");
app.use(express.static("public"));
//DB
app.post('/insert', function(req, res) {
  var item = {
      "FName": req.body.fname,
      "LName": req.body.lname,
      "Email": req.body.email,
      "Password": req.body.password,
      "Mobile": req.body.mobile,
      "City": req.body.department
  };

  var data = new User(item);
  data.save((err, user)=>{
    //   if(err)
    //     {
    //         console.log(err);
    //     }
        if(err.message.indexOf("11000") != -1)
        {
            // run some code here //
            console.log("ERROR", "ID already taken");
            res.render("signUp", {error: "Email Already exists!!"});
        }
        else
        {
            console.log("Tom");
            res.redirect('/login');
        }
  });
});
//Routes
app.get("/",function(req,res){
    res.render("login",{error:""});
})
app.post('/check', function(req, res) {
  var entered_email = req.body.email;
  var entered_password = req.body.password;
  console.log(entered_email+":"+entered_password);
  User.findOne({Email: entered_email}, function(err, user) {
    // console.log("Before if!!");
    if(err){ console.log(err);}
    if (user==null) {
        res.render("login", {error: "Invalid email or password!!"});
    }
    else {if(user.Password == entered_password){
        console.log(user.Email+":"+user.Password);
        req.session.user = user;
        res.redirect("homepage");
    }
        else{
            res.render("login", {error: "Invalid email or password!!"});
        }
    }
  });
});


app.get("/login", function(req,res){
    res.render("login",{error:" "});
});
app.get("/homepage", function(req,res){
    if(!req.session.user){
        return res.status(401).send();
    }
    res.render("index");
    console.log('HELLO');
});

app.get('/logout', function(req, res) {
  if (req.session) {
    req.session.destroy();
    return res.redirect('/');
      }
});

app.get("/soups", function(req,res){
    res.render("soups");
});

app.get("/rice", function(req,res){
    res.render("rice");
});

app.get("/breads", function(req,res){
    res.render("breads");
});

app.get("/smallbites", function(req,res){
    res.render("smallbites");
});

app.get("/seafoods", function(req,res){
    res.render("seafoods");
});

app.get("/desserts", function(req,res){
    res.render("desserts");
});

app.get("/drinks", function(req,res){
    res.render("drinks");
});

app.get("/icecream", function(req,res){
    res.render("icecream");
});
// more
app.get("/starters", function(req,res){
    res.render("starters");
});
app.get("/globalsalads", function(req,res){
    res.render("globalsalads");
});
app.get("/curries", function(req,res){
    res.render("curries");
});
app.get("/signup", function(req,res){
    res.render("signUp", {error: " "});
});

// Connection for Port
app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Its running");
});