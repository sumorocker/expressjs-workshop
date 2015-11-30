var express = require('express');
var app = express();


app.get('/entry/:entryId', function(req, res) {
    var entryId = req.params.entryId;

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
    }

    if (entries[entryId]) {
      res.json(entries[entryId])
    }
    else {
      res.send('Error 404')
    }
  })

//YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) 

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
