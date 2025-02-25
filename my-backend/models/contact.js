const {Schema,model} = require('../connection');
const contactSchema = new Schema({
    firstname : String,
    lastname : String,
    email : String,
    phone_number:String,
    detail:String,
    
});

module.exports = model('contact',contactSchema)