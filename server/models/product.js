var mongoose = require('mongoose')
var Schema = mongoose.Schema

// Schema.pre('save', function(next){
// 	var currentDate = new Date()
// 	this.updated_at = currentDate
// 	this.created_at = currentDate

// 	next()
// })
var NewProduct = new Schema({
	prod_name:String,
	prod_type:String,
	prod_id:Number
},{timestamps:true})

mongoose.model('Product',NewProduct)