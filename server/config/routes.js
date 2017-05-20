var prod_controller = require('./../controllers/prod_controller.js')

module.exports=function(app){
	app.get('/',function(req,res){
			//res.render('index')
			prod_controller.index(req,res)

	})

	app.post('/prod_list',function(req,res){
		
		prod_controller.prod_list(req,res)
	})
} 