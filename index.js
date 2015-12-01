var express = require('express');
var app = express();

function emailMatches(queryEmail,userEmails){
  for(var i=0; i > userEmails.length; i++){
    if (userEmails[i].address === queryEmail){
      return true;
    }

  }
  return false;
}

app.get('/entry/', function(req, res) {
      var matches = []
      var entries = {
        1: {
          firstName: 'Luke',
          lastName: 'Skywalker',
          emails: [{
            type: 'home',
            address: 'john@smith.com'
          }, {
            type: 'home',
            address: 'jsmith@megacorp.com'
          }]
        },
        2: {
          firstName: 'Luke',
          lastName: 'Earthflier',
          emails: [{
            type: 'home',
            address: 'theforce@smith.com'
          }, {
            type: 'home',
            address: 'darthsucks@megacorp.com'
          }]
        },
        3: {
          firstName: 'Leia',
          lastName: 'Organa',
          emails: [{
            type: 'home',
            address: 'princess@live.com'
          }, {
            type: 'work',
            address: 'jabbasucks@megacorp.com'
          }]
        },
      }

 
      for (var prop in entries) {

        if (req.query.firstName === entries[prop].firstName || req.query.lastName === entries[prop].lastName || emailMatches(req.query.email, entries[prop].emails)) {
          matches.push(entries[prop])
        }
    }
    res.json(matches)


});

app.listen(process.env.PORT, function() {
  console.log("server started on port " + process.env.PORT)
});

    //YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) 

    // Boilerplate code to start up the web server
    // var server = app.listen(process.env.PORT, process.env.IP, function() {
    //   var host = server.address().address;
    //   var port = server.address().port;

    //   console.log('Example app listening at http://%s:%s', host, port);
    // });