const properties = require('./getProperties.js')

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.type || (req.body && req.body.type)) {

        var response;
        if(typeof req.query.type !="undefined")
            response =  properties.getProperties(req.query.type,context);
        else
            response = properties.getProperties(req.body.type,context);


        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + response
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a type on the query string or in the request body"
        };
    }
    context.done();
};