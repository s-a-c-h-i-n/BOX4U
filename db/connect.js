var mongoose = require('mongoose');
 //mongoose.connect("mongodb://localhost/box",{ useNewUrlParser: true });
  // mongoose.connect("mongodb://localhost/user",{ useNewUrlParser: true });
 mongoose.connect("mongodb://box:tanmayligma69@ds227243.mlab.com:27243/box",{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

module.exports={
    mongoose:mongoose
};
