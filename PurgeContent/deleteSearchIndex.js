const request = require('request');


function deleteIndex(chronicleIdString,callBack){
  
    var options = {
        url : process.env['API_ENDPOINT'] + "/indexes/deletion/docs/search?api-version=" + process.env['API-VERSION'],
        method : "DELETE",
        headers : {
            "Content-Type" : "application/json",
            "api-key": process.env['API-KEY']
            
        },
        body : JSON.stringify({
           "search.action" : "delete" ,
           "chronicleId" : chronicleIdString,
           
        })

    };

    request(options,callback);
}




module.exports = {

    deleteIndex : deleteIndex
}