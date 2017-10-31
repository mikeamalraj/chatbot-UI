//require express library
var express = require('express');
//require the express router
var router = express.Router();
//require multer for the file uploads
var multer = require('multer');

/*var DIR = './uploads/';
var upload = multer({dest: DIR}).single('file');*/

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    //cb(null, file.originalname + '-' + Date.now())
    cb(null, file.originalname)
  }
})

//var upload = multer({ storage: storage }).any();

 var upload = multer({ storage: storage,
  fileFilter: function (req, file, callback) {
    if (file.mimetype !== 'application/vnd.ms-excel') {
      return callback(new Error('Only CSV files are allowed'))
    }
    callback(null, true)
  }}).single('file');


// var upload = multer({ storage: storage}).single('file');

/*
var app = express();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    //console.log("aha " + file.originalname);
    cb(null, file.originalname)
  }
})
var upload = multer().single('file');
app.use(multer({storage:storage}).single('file'));
*/



/*
app.use(multer({
  dest: DIR,
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
}).single('file'));
*/


/*var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    var extArray = file.mimetype.split("/");
    var extension = extArray[extArray.length - 1];
    cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
  }
})
var upload = multer({ storage: storage });*/


/*
router.get('/', function(req, res, next) {
// render the index page, and pass data to it.
  console.log('get method');
  res.render('index', { title: 'Express' });
});

*/


//our file upload function.
router.post('/', function (req, res, next) {
  var path = '';
  upload(req, res, function (err) {
    //console.log(req);
    if (err) {
      // An error occurred when uploading
      console.log(err);
      return res.status(422).send("an Error occured")
    }
    // No error occured.
    path = req.file.path;
    return res.send({path: path});
  });
})
module.exports = router;
