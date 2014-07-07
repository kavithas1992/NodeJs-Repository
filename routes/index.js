var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

////
router.get('/myPage', function (req, res) {
    res.render('SampleView.jade', {
        title: 'My Page'
    });
});


/////
router.post('/user', function (req, res) {

    var name = req.body.name;
    var age = req.body.age;
    //console.log(name);
    res.render('SampleResult.jade', {
        title: 'My Page',
        names1: name,
        ages1 : age
    });
});

module.exports = router;