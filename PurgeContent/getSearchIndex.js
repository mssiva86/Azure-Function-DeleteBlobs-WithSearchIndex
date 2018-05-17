const request = require('request');

function callAzureSearchAPI(callback){
    var date = new Date();
    date.setMonth(date.getMonth() - 3);
    console.log(date);
    var options = {
        url : process.env['API_ENDPOINT'] + "/indexes/deletion/docs/search?api-version=" + process.env['API-VERSION'],
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "api-key": process.env['API-KEY']
            
        },
        body : JSON.stringify({
           "search" : "*" ,
           "filter" : "modifiedDate ge " + date.toISOString() + " ",
           "select" : "chronicleId"
        })

    };

    request(options,callback);
}



module.exports = {
    callAzureSearchAPI : callAzureSearchAPI
}