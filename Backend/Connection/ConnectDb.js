
const mongoose = require('mongoose');
const nconf = require('nconf');

nconf.argv().env().file({ file: 'Connection/config.json' });


var s=nconf.get("MONGODB_URI")
console.log(s)

// method that connects to the MongoDB database
const ConnectDB = async () => {
    try {
        await mongoose.connect(s, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = ConnectDB;