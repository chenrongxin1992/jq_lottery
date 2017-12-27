var express = require('express');
var router = express.Router();
const wxuserinfo = require('../db/userinfo')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test',function(req,res){
	let search = wxuserinfo.find({ is_used:{ $ne:1}})
		search.exec(function(err,docs){
			if(err){
				console.log('err-->',err)
				return res.json({'err':err})
			}
			console.log('docs-->',docs)
			res.render('test',{userinfo:docs})
		})
})
router.post('/delete_el',function(req,res){
	let _id = req.body._id
	console.log('check _id-->',_id)
	wxuserinfo.remove({'_id':_id},function(err){
		if(err){
			console.log('err-->',err)
			return res.json({'errCode':-1,'errMsg':err})
		}
		return res.json({'errCode':0,'errMsg':'remove success'})
	})
})
module.exports = router;
