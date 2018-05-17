const azureStorage = require('azure-storage');
const searchRequest = require('./getSearchIndex.js');
const deleteSearch  = require('./deleteSearchIndex.js');

const API_ENDPOINT = "https://jjkedcontentsearch.search.windows.net";




function deleteStorageBlob(blobName,response){
    var blobService = azureStorage.createBlobService();
    var blobNamewithExtn = blobName + "." + process.env['ContentType'];
    blobService.deleteBlobIfExists(process.env['BlobContainer'],blobNamewithExtn,deletionerror => {
        if(deletionerror){
            response.statusMessage = "Document Deletion failed";
        }
    }); 
}

function deleteAzureSearchIndexDocument()

module.exports = function (context, myTimer) {
      
      

    searchRequest.callAzureSearchAPI(function(error,response,body){
        if(error == null){

            var results = JSON.parse(body);
            for(key in results.value)
            {
                var chronicleId = results.value[key].chronicleId;
                deleteStorageBlob(chronicleId,response);
                deleteSearch.deleteIndex(chronicleId,function(error,response,body){
                    if(error !=null)
                    {
                        response.statusMessage = "Index deletion failed";
                    }
                });
                console.log(results.value[key].chronicleId);
                console.log(key);
             }

            
        }
        context.done(null,response);
    });

   
    
};