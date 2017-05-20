var prod_cont = require('./../controllers/prod_controller.js')

module.exports=function(app){
	app.get('/',function(req,res){
			//res.render('index')
			prod_cont.index(req,res)
	})

	app.post('/prod_list',function(req,res){
		prod_cont.prod_list(req,res)
	})
}