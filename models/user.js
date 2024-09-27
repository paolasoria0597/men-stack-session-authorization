const mongoose = require("mongoose"); 

const userSchema = new mongoose.Schema({ // we make a variable and a ssigning it to a new instanmce of our schema class.
  username: { //key value pairs. Why create a model: we need this so we can tell how we want our data to look like. 
    type: String,
    required: true,// a username needs to be provided or else an error message will apppear
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
