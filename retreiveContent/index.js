module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.id || (req.body && req.body.id)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.id || req.body.id)
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