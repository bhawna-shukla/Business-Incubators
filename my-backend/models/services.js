const {Schema, model} = require('../connection');
const serviceSchema = new Schema({
    name: String,
    content:String,
    servicecategory:String,
    image:String,
    description:String,
    
    
});

module.exports = model('service', serviceSchema)