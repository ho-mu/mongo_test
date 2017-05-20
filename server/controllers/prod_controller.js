var mongoose=require('mongoose')
var Product = mongoose.model('Product')
var Prod = require('./../models/product.js')
var db=mongoose.connection
var collection=db.collection('products')
mongoose.Promise = global.Promise;


module.exports=(function(req,res){
	return{
		index: function(req,res){
			res.render('index')
		},
		prod_list: function(req,res){
			//console.log(req.body)
			var product = new Product(req.body)

			product.save(function(err){
				if(err){
					console.log(err)
				}
			})

			//add code to retrieve the entire listing for the page
			//var prod = collection.find({}).toArray()
			//var prod = collection.find({}).toArray(0)
			
			// for (var i=0; i<prod.length; i++){
			// 	console.log(`${prod[i].prod_name}`)
			
			// }
			collection.find({}).toArray(function(err,results){
				console.log(results)
				res.render('product_list',{products: results})
			})
			

			//res.render('product_list', {products: prod})

		}
	}
})()