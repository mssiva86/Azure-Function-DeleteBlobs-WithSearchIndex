const azureStorage = require('azure-storage');


function connecttoBlob(id,extn,context){
    // const containerName = process.env['BlobContainer'];
    const blobName = id + "." + extn;
    const containerName = 'jjkedcontentblob';
    var blobService = azureStorage.create
    
    blobService.getBlobToLocalFile(containerName,blobName,blobName, function(error,content){
        if(!error){
            context.res = {
                body : {'data' : content.blob},
                headers : {'Content-type': 'text/xml'}
            }
        }
    });
   
}




module.exports = {
    connecttoBlob: connecttoBlob
}



