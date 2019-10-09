const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema= new Schema({
    name: {type: String, required: true},
    rate: {type: Number, required: true},
},{
timestamps:true,
});

const Company = mongoose.model('Company', companySchema);

module.exports =Company;