// Design a web page and Demonstrate Node Js application 
//run as node filename

var http = require("http");
http.createServer(function (request, response) {
    // Send the HTTP header
    // HTTP Status: 200 OK
    // Content Type: text/html
    response.writeHead(200, { 'Content-Type': 'text/html' });
    // Send the response body as an HTML page
    response.end(`
    <html>
    <head>
        <title>Number Manipulation</title>
    </head>
    <body>
        <center>
            <div style="padding-top: 50px;">
                Number: <input type="number" id="myNumber" /><br /><br />
                <button onclick="increment()">Increment</button>
                <button onclick="decrement()">Decrement</button>
            </div>
        </center>
        <script>
            function increment() {
                document.getElementById("myNumber").stepUp(1);
            }
            function decrement() {
                document.getElementById("myNumber").stepDown(1);
            }
        </script>
    </body>
    </html>`);
}).listen(8081);
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');


//run as node filename
