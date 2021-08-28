const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Aman:Chaikidukan1@cluster0.kwlnx.mongodb.net/ContactList?retryWrites=true&w=majority",{ useUnifiedTopology:true,useNewUrlParser:true});
const db=mongoose.connection;
db.on('error', console.error.bind(console,'connection error connecting to db'));
db.once('open', function () {
   console.log("successfully connected to database");
});
