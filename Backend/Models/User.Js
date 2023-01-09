const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const nconf = require('nconf');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    college:{
        type:String
    },
    committee:{
        type:String
    },
    assigned:{
        type:String
    }
});


User.methods.generateAuthToken = function(payload) {
    token = jwt.sign(
        payload,
        "Somesecretcode",// nconf.get('JWT_SECRET'),
    );
    return token;team
}

// encrypts the password before saving to the database
User.pre('save', function (next) {
    var user = this;
  
    if (user.isModified('password')) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          user.password = hash;
          next();
        });
      });
    } else {
      next();
    }
});


module.exports = user = mongoose.model("User", User);