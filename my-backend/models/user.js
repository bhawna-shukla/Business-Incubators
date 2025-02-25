const {Schema,model} = require('../connection');
const userSchema = new Schema({
    firstname : String,
    lastname : String,
    email : String,
    password:String,
    datail:String,
    
});

module.exports = model('user',userSchema)