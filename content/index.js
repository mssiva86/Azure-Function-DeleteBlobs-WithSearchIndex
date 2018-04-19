var accessBlob = require('../Shared/accessBlob.js');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    if (req.query.id || (req.body && req.body.id)) {   
        context.res = {
            body : {'data' : context.bindings.blobContent},
            headers : {'Content-type': 'application/xml"'}
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a object/chuck id on the query string or in the request body"
        };
    }
    context.done(null,context.res);
};