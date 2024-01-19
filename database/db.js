const mongoose = require("mongoose");

const connectToDb = (req, res) => {
    mongoose.connect(
        process.env.DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('MongoDB Atlas connected.'))
        .catch((err) => console.log(err));
};

module.exports = connectToDb;
