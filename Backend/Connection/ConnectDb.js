
const mongoose = require('mongoose');
const nconf = require('nconf');

nconf.argv().env().file({ file: 'Connection/config.json' });

// method that connects to the MongoDB database
const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb://0.0.0.0:27017/LOTtest", {
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