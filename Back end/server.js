
var mysql = require('mysql');
var express = require('express');
var path = require('path');
var request = require('request');
var child_process = require('child_process');
var portfinder =  require('portfinder');

/*var con = mysql.createPool({
  connectionLimit : 100,
  host: "localhost",
  user: "root",
  password: "root",
  database: "chatbot"
});*/

var con = mysql.createPool({
  connectionLimit : 100,
  host: "144.76.159.199",
  user: "root",
  password: "serendio123",
  database: "chatbot"
});

var row = "";
var Datachanged = true;
var Rowlength = 0;
var oldlen = 0;
var k = 0;
var port_start = 12000;

var chatbot_dir = '/home/serendio/chatbot';

function insertIntoDB(req,res,input){
  con.getConnection(function(err,con) {
    if (err) throw err;
    var query = "insert into master values ('','" + input.name + "','" + input.description + "','" + input.microsoftId + "','" + input.microsoftKey + "','" + input.ecommerce + "','" + input.ecommerceServer + "','" + input.ecommerceKey + "','" + input.ecommerceSecret +"'," + input.port_no + ",'"+ input.subKey +"','"+ input.kbId +"','',0,null)";
    con.query(query, function (err, result, fields) {
      con.release();
      if (err) {
         console.log('error', err);
          res.status(500).send({
            error: err
          });
      }
      res.json(result);
    });
  });
};

function getFromDB(req,res,input){
  con.getConnection(function(err,con) {
    if (err) throw err;
    var query = "select * from master";
    con.query(query, function (err, result, fields) {
      con.release();
      if (err) {
        console.log('error', err);
        res.status(500).send({
          error: err
        });
      }
      res.json(result);
    });
  });
};

function updateBotStatus(req,res,input){
  con.getConnection(function(err,con) {
    if (err) throw err;
    var query = "update master set status =" + input.status + " where id=" + input.id;
    con.query(query, function (err, result, fields) {
      con.release();
      if (err) {
        console.log('error', err);
        res.status(500).send({
          error: err
        });
      }
      res.json(result);
    });
  });
};

function deleletBot(req,res,input){
  con.getConnection(function(err,con) {
    if (err) throw err;
    var query = "delete from master where id =" + input.id;
    con.query(query, function (err, result, fields) {
      con.release();
      if (err) {
        console.log('error', err);
        res.status(500).send({
          error: err
        });
      }
      res.json(result);
    });
  });
};

function getQnAKey(req,res,input) {
    const csvFilePath= path.join(__dirname + '\\'+ input.Path);
    const csv=require('csvtojson');
    var data=[];
    csv()
        .fromFile(csvFilePath)
        .on('json',(jsonObj)=>{
            data.push(jsonObj);
        })
        .on('done',(error)=>{
          getQnAKeyAPI(req,res,input.subKey,data,input.name);
        });
}

function getQnAKeyAPI(req,res,subKey,data, name) {
  var  options = {
    // url: 'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/95688330-adcb-4a2a-b6a2-910af9d15d19/generateAnswer',
    url:'https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/create',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': subKey,
    },
    body: {
      "name" : "QnA Maker FAQ - " + name,
      "qnaPairs": data
    },
    json:true
  };

  request(options, function(err, resp, body) {
    if (body.error){
      res.status(500).send({
        error: body.error
      });
      return;
    }
    res.send({kbId: body.kbId});
  });
}

function getMicrosfotAccount(req,res) {
  con.getConnection(function(err,con) {
    if (err) throw err;
    var query = "select * from microsoftaccount where status = 0 limit 1";
    con.query(query, function (err, result, fields) {
      con.release();
      if (err) {
        console.log('error', err);
        res.status(500).send({
          error: err
        });
      }
      res.json(result);
    });
  });
};
function updateMicrosfotAccount(req,res,input) {
  con.getConnection(function(err,con) {
    if (err) throw err;
    var query;
    if(input.micro_id){
          query = "update microsoftaccount set status = 1 where id=" + input.micro_id;
    }else {
          query = "update microsoftaccount set status = 0 where port=" + input.port;
    }

    con.query(query, function (err, result, fields) {
      con.release();
      if (err) {
        console.log('error', err);
        res.status(500).send({
          error: err
        });
      }
      res.json(result);
    });
  });
}
function check(){
  var sql = "select * from master";
  con.query(sql,function(err, result,fields){
    if (err) {
      throw err;
    }else{
      row = result;
      Rowlength = row.length;
      if (Rowlength > 0 && Datachanged == true){

        for (var i = 0; i < Rowlength; i++){

          var process_id = row[i].process_id;//=null
          var status = row[i].status;//=1
          var port_id = row[i].port;//3978

          var rowid= row[i].process_id;

          if (status == 0 && process_id!==null){

            var process_id= row[i].process_id;
            var stoprow_id = row[i].id;

            var Stopprocess = child_process.exec("forever stop "+ process_id,function(err, stdout, stderr) {
              //var Stopprocess = child_process.exec("forever stop 43UID",function(err, stdout, stderr) {
              if (err) {
                console.log('exec error :${error}' + err);
                return;
              }else{
                var updatesqlOFF = "update master set process_id = null where id = " +stoprow_id;
                con.query(updatesqlOFF,function(err, result) {
                  if (err) {
                    throw err;
                  } else {
                    console.log("update successful!")
                  }
                })
              }
            }.bind({process_id:process_id}));

          }else if (status == 1 && process_id==null){
            var rowid_1= row[i].id;
            //portfinder.getPort(function (err,port){

              var rowid = this.rowid_1;

              var workerprocess = child_process.exec("forever start -a --uid "+ rowid+"UID"+" app.js "+ rowid,{ cwd: chatbot_dir},function(err, stdout, stderr) {
                if (err) {
                  console.log('exec error :${error}' + err);
                  return;

                }else{
                  //console.log('stdout : ${stdout}' + stdout + rowid+"UID");
                  var updatesqlOFF = "update master set process_id = '"+this.rowid+"UID' where id = " +this.rowid;
                  con.query(updatesqlOFF,function(err, result) {
                    if (err) {
                      throw err;
                    } else {
                      console.log("update successful!")
                    }
                  })
                }


              }.bind({rowid:rowid}));

            //}.bind({rowid_1:rowid_1}));

            console.log("*******************************************************");
          }

        }

      }else{
        console.log("No data in the table yet");
      }
      oldlen = Rowlength;
    }
  })

}

setInterval(check,20000);


  // Web app
  var app = express();
  var bodyParser = require('body-parser');
  // app.use(express.static(path.join(__dirname, 'src')));

  app.use(express.static(path.join(__dirname, 'src')));

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin","*");
    /*res.header("Access-Control-Allow-Header","Content-Type");*/
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", false);
    next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  var routes = require('./src/routes');
  //app.use('/', routes);
  app.use(routes);

  app.get('/', function(req, res) {
    console.log('Get method called');
    //res.sendfile(path.join(__dirname, 'src\\') + 'index.html');
    // res.sendfile('index.html');
    res.send('hello');
  });

  app.post('/insert', function (req,res) {
    var val = Object.keys(req.body);
    insertIntoDB(req,res,JSON.parse(val))
  });

  app.post('/botupdate', function (req,res) {
    var val = Object.keys(req.body);
    updateBotStatus(req,res,JSON.parse(val))
  });

  app.get('/getfromdb', function (req,res) {
    getFromDB(req,res,req.params);
  });

  app.get('/getqnakey', function (req,res) {
    //console.log(req.query);
    getQnAKey(req,res,req.query);

  });

  app.post('/delete', function (req,res) {
    var val = Object.keys(req.body);
    deleletBot(req,res,JSON.parse(val))
  });

  app.get('/getmicrosoftaccount', function (req,res) {
    getMicrosfotAccount(req,res);
  });

  app.post('/updatemicrosoft', function (req,res) {
    var val = Object.keys(req.body);
    updateMicrosfotAccount(req,res,JSON.parse(val))
  });

  // Catch 404 and forward to error handler
  app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.listen(3000, function () {
  console.log('Web Server listening on port %s', 3000);
  });

