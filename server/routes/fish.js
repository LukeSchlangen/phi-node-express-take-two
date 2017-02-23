var express = require('express');
var router = express.Router();
var fishiesList = [{name: 'walleye'}, {name: 'pike'}, {name: 'muskie'}];

router.get('/', function(req, res){
  res.send(fishiesList);
});

// handle the request for the first fish
router.get('/first', function(req, res){
  res.send(fishiesList[0]);
});

// handle the request for the last fish
router.get('/last', function(req, res){
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex]);
});

// handle request for the name of the first fish
router.get('/first/name', function(req, res){
  res.send(fishiesList[0].name);
});

// handle request for the name of the last fish
router.get('/last/name', function(req, res){
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex].name);
});

router.post('/new', function(req, res){
  var newFish = req.body;
  fishiesList.push(newFish);
  res.sendStatus(200);
});

module.exports = router;
