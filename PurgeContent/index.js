const azureStorage = require('azure-storage');
const searchRequest = require('./getSearchIndex.js');






function deleteStorageBlob(blobName,context){
    var blobService = azureStorage.createBlobService();
    var blobNamewithExtn = blobName + "." + process.env['ContentType'];
    
    blobService.deleteBlobIfExists(process.env['BlobContainer'],blobNamewithExtn,function(error,response,body){
      if(error == null){
          context.log("Deletion successfully " + response);
        context.response =  {
            status : response.status,
            body   : response.body
        }
      }
      else{
          throw error;
      }
    }); 


}



module.exports = function (context, myTimer) {
    context.log("Start the function process");
 
    searchRequest.callAzureSearchAPI(function(error,response,body){
        if(error == null){

            var results = JSON.parse(body);
            context.log("Success " + results)
            for(key in results.value)
            {
                var chronicleId = results.value[key].chronicleId;
                deleteStorageBlob(chronicleId,context);
                context.log("The processing id " + chronicleId);
             }

             
        }
        else{
            throw error;
        }
        context.done();
    });
  
};