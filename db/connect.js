var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/user",{ useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

module.exports={
    mongoose:mongoose
};
