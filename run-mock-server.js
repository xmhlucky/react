var jsonServer = require('json-server');
var server = jsonServer.create();
const middlewares = jsonServer.defaults({noCors: true});
server.use(middlewares)
var fs = require('fs');
var _ = require('lodash');
var mockPath = './mock';


function loadRouters() {
    var allRouters = {};

    fs.readdirSync(mockPath).forEach(function(file,index){
        var curPath = mockPath + '/' + file;
        var r = require(curPath);
        _.extend( allRouters, r );
    });

    return allRouters;
}


function makeRouters(routers) {

    console.log(routers);

    Object.keys(routers).forEach(function(k){
        server.use(k, function(req, res, next){
            res.header("Access-Control-Allow-Origin", "http://localhost:8011");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Credentials", true);
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
            res.header("X-Powered-By", ' 3.2.1')
            res.send(routers[k]);
        })
    })
}


function startServer() {
    server.listen(3000, function () {
        console.log('JSON Server is running at:3000');
    })
}

makeRouters(loadRouters());
startServer();
