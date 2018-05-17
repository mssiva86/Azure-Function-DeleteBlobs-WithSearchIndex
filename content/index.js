var accessBlob = require('../Shared/accessBlob.js');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    
    if (req.query.id || (req.body && req.body.id)) {   
       var extn = "xml";
        if(typeof(req.query.id) !='undefined'){
            if(typeof(req.query.extn) !='undefined')
              extn = req.query.extn;
            accessBlob.connecttoBlob(req.query.id,extn,context);
        }
        else{
            if(typeof(req.body.extn)!='undefined')
             extn = req.body.extn;
            accessBlob.connecttoBlob(req.body.id,extn,context);
        }
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a object/chuck id on the query string or in the request body"
        };
    }
    context.done();
};