const mongoose = require('mongoose');
const url = "mongodb+srv://BHAWNA150902:SHUKLA150902@cluster0.vwjaq8g.mongodb.net/major-project?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
//asynchronus function
.then((result) => {
    console.log('connect to data base')
}).catch((err) => {
    console.log(err)
});

module.exports = mongoose