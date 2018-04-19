var accessBlob = require('../Shared/accessBlob.js');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    if (req.query.id || (req.body && req.body.id)) {   
       
        if(typeof(req.query.id) !='undefined')
            accessBlob.connecttoBlob(req.query.id,context);
        else
            accessBlob.connecttoBlob(req.body.id,context);
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a object/chuck id on the query string or in the request body"
        };
    }
    context.done();
};