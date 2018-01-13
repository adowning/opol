var express    = require('express');
var Webtask    = require('webtask-tools');
var bodyParser = require('body-parser');
var app = express();
var firebase = require('firebase')

      var  fb = firebase.initializeApp({
            apiKey: 'AIzaSyBEOwXK3CiV6ASIS66a7vicIbfHqAaLt1w',
            databaseURL: 'https://andrews-test.firebaseio.com/',
            authDomain: 'andrews-test.firebaseapp.com',
            storageBucket: 'gs://andrews-test.appspot.com'
        })
       var  db = fb.database()
       
      
  
app.get('/', function (req, res) {
  console.log(req.body)
   var ref = db.ref('rocketchat')
  ref.push(req.body)
  res.sendStatus(200);
});

module.exports = Webtask.fromExpress(app);
