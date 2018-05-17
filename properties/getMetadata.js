const azureStorage = require('azure-storage');



function getMetadata(key){
    const containerName = "jjkedcontentblob";
    var blobService = azureStorage.createBlobService();
   
}


module.exports = {

    getMetadata : getMetadata
}