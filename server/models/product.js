var mongoose = require('mongoose')
var Schema = mongoose.Schema
var Product = new Schema({
	product_name:String,
	product_type:String,
	product_id:Number
},{timestamp:true})

mongoose.model('Product',Product)