var http = require('http');
var crypto = require("crypto");

http.createServer(function (req, res) {
  var accesskey = "93K17Co74T2lDHk2rA+wmb/avIAS6u6lPnZrk2hyT+9+aov82qNhrcXSNGZCzm9mjd4d75/oxxOr6r1JVpgTLA==";

  // construct input value
  var inputvalue = "GETn" + /*VERB*/
    "n" + /*Content-Encoding*/
    "n" + /*Content-Language*/
    "n" + /*Content-Length*/
    "n" + /*Content-MD5*/
    "n" + /*Content-Type*/
    "n" + /*Date*/
    "n" + /*If-Modified-Since*/
    "n" + /*If-Match*/
    "n" + /*If-None-Match*/
    "n" + /*If-Unmodified-Since*/
    "n" + /*Range*/
    "x-ms-client-request-id:9251fa41-0ca4-4558-84ac-44ab027b8f1en" +
    "x-ms-date:Tue, 05 Jul 2016 06:48:26 GMTn" +
    "x-ms-version:2015-07-08n" +
    "/tsmatsuzsttest0001/container01/tmp.txt";

  // create base64 encoded signature
  var key = new Buffer(accesskey, "base64");
  var hmac = crypto.createHmac("sha256", key);
  hmac.update(inputvalue);
  var sig = hmac.digest("base64");

  // show result
  res.writeHead(200,
    { 'Content-Type': 'text/plain; charset=utf-8' });
  res.write(sig);
  res.end();
}).listen(8000);