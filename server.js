var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write(<canvas id="canvasInAPerfectWorld" width="490" height="220"></canvas>" " );
    response.end();
}).listen(8888);
