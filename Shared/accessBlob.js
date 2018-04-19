const azureStorage = require('azure-storage');

process.env['AZURE_STORAGE_ACCOUNT'] = 'jjkedcontentdevusc';
process.env['AZURE_STORAGE_ACCESS_KEY'] = 'YI7D896XLoHWOSK6NDsUCTtqB5Y3CofFXKDEZ77dnVXbVAgNIs8jPCU6hXBMbvHgyGiJRDhUXvMkfcm/U5audg==';


function connecttoBlob(id,context){
    // const containerName = process.env['BlobContainer'];
    
    var containerName = 'jjkedcontentblob';
    context.res = {
        body : {'data' : context.bindings.blobContent},
        headers : {'Content-type': 'text/xml'}
    }
}


function getUrl(containerName,id){

    var blobService = azureStorage.createBlobService();
    var startDate = new Date();
    startDate.setMinutes(startDate.getMinutes()-15);

    var expiryDate = new Date(startDate);
    expiryDate.setMinutes(startDate.getMinutes() + 30);

    var permissions = azureStorage.BlobUtilities.SharedAccessPermissions.READ;

    var sharedAccessPolicy = {
        AccessPolicy : {
            Permissions : permissions,
            Start : startDate,
            Expiry : expiryDate,

        }
    };

    var sasToken = blobService.generateSharedAccessSignature(containerName,id,sharedAccessPolicy);
   
     return blobService.getUrl(containerName,id,sasToken);
}


module.exports = {
    connecttoBlob: connecttoBlob
}



