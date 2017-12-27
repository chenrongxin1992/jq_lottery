var express = require('express');
var router = express.Router();
const wxuserinfo = require('../db/userinfo')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test',function(req,res){
	let search = wxuserinfo.find({})
		search.exec(function(err,docs){
			if(err){
				console.log('err-->',err)
				return res.json({'err':err})
			}
			console.log('docs-->',docs)
			res.render('test',{userinfo:docs})
		})
})
module.exports = router;
