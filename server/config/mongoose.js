var mongoose=require('mongoose')
var path=require('path')
var fs=require('fs')
var models_path=path.join(__dirname+'./../models')

mongoose.connect('mongodb://localhost/prodDB')

fs.readdirSync(models_path).forEach(file){
	if(indexOf('js') >= 0){
		require(models_path+'/'+file)
	}
}