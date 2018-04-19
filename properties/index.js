module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if(Object.keys(req.query).length  != 0 )
    {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + req.query
        };
    }
    else if(Object.keys(req.body).length != 0){
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + req.body
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};