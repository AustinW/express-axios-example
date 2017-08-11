const app = require('express')();

app.get('/', function (req, res) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send(req.query.original)
})

// ---------------------------------------------
// var cors = require('cors')
// var bodyParser = require('body-parser');
// var multer = require('multer'); // v1.0.5
// var upload = multer(); // for parsing multipart/form-data

// app.options('*', cors()) // include before other routes
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// app.post('/', upload.array(), function (req, res, next) {
// 	//	Website you wish to allow to connect
//   res.setHeader('Access-Control-Allow-Origin', '*')
//   res.json(req.body.data.original);
// });

// ------------------------------------------------

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
