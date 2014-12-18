var express = require('express');
var app = express();
var collection = null;
var ObjectID = require('mongodb').ObjectID;

app.use(express.static('./'));

app.get('/get',function(req,res){
	var find= {};
    if(req.query.user!=""&&req.query.user!=null&&req.query.pass!=""&&req.query.pass!=null){

	find.user = req.query.user;
	find.pass = req.query.pass;

	collection.find(find).toArray(function(err,result){

		res.send(JSON.stringify(result));

		
	})
  }
})


// Retrieve
var MongoClient = require('mongodb').MongoClient;
// Connect to the db
MongoClient.connect("mongodb://root:root@linus.mongohq.com:10097/Grade", function(err, db) {
    if (!err) {
        collection = db.collection('student_grade');
        console.log("We are connected");
        app.listen(3000);
    } else if (err) {
        throw err;
    }
});