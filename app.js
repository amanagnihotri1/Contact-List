const Contact=require('./models/contact');
const db =require('./config/mongoose');
const express=require('express');
const bodyParser=require("body-parser");
const ejs=require('ejs');
const path=require('path');
const app = express();
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
//To Get All Contacts From Database
app.get("/",function(req,res)
{ 
  Contact.find(function(err,contacts)
  {
    if(err)
    {
      console.log("Error in finding Contact");
      return;
    }
    return res.render("home",{title:"Contact List",contact_list:contacts});
  });
});
app.use(express.static('assests'));
app.post("/",function(req, res) {
    //Function to Create And Add new Contact to Database
    Contact.create({
      name:req.body.name,
      phone:req.body.number
    },
    function(err,newContact)
    {
      if(err){ console.log("error in creating contact"); return; }
    
    return res.redirect('back');

  });
});

app.get('/delete-contact', function(req, res) {
let id=req.query.id;
 //To Delete a Contact
  Contact.findByIdAndDelete(id, function(err)
 {
   if(err)
   {
     console.log("error,Can't Delete This Contact");
   return;
    }
    return res.redirect('back');
  });
});
app.listen(process.env.PORT || 3000,function(err)
{
    if(err)
    {console.log("code fat gaya");}
    console.log("server is running at:3000");
})