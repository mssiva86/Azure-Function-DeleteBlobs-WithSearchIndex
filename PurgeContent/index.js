const azureStorage = require('azure-storage');
const searchRequest = require('./getSearchIndex.js');

const API_ENDPOINT = "https://jjkedcontentsearch.search.windows.net";




function deleteStorageBlob(blobName,context){
    var blobService = azureStorage.createBlobService();
    var blobNamewithExtn = blobName + "." + process.env['ContentType'];
    
    blobService.deleteBlobIfExists(process.env['BlobContainer'],blobNamewithExtn,function(error,response,body){
      if(error == null){
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
 
    searchRequest.callAzureSearchAPI(function(error,response,body){
        if(error == null){

            var results = JSON.parse(body);
            for(key in results.value)
            {
                var chronicleId = results.value[key].chronicleId;
                deleteStorageBlob(chronicleId,context);
             }

             
        }
        else{
            throw error;
        }
        context.done();
    });
  
};