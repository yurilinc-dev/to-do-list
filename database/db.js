const mongoose = require("mongoose");


const connectToDb = (req, res) => {
    mongoose.connect(
        "mongodb+srv://root:admin123@todolist.epmo64q.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('MongoDB Atlas connected.'))
        .catch((err) => console.log(err));
};

module.exports = connectToDb;
