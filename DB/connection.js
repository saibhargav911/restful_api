const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/mydb",{useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false})
.then(()=>{
    console.log("Database created");
})
.catch((err)=>{
  console.log(err);
});
