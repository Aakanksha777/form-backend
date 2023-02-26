const mongoose = require("mongoose")
require("./model/user.model");

//mongoose connection string:
mongoose.connect('mongodb://localhost:27017/formDataDemo')
  .then(() => console.log('Connected! to database, formData saved..! '));
