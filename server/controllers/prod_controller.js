var mongoose=require('mongoose')
var Product = mongoose.model('Product')

module.exports=(function(req,res){
	return{
		index: function(req,res){
			res.render('index')
		},
		prod_list: function(req,res){
			//console.log(req.body)
			res.render('product_list',req.body)
		}
	}
})()