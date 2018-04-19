const azureStorage = require('azure-storage');



function getProperties(type,context){
    const containerName = "jjkedcontentblob";
    var blobService = azureStorage.createBlobService();
    blobService.listBlobsSegmented(containerName,null,function(err,result){
        if(err){
            console.log("Here is the error" + err);
        }
        else{
            console.log(result.entries);
            console.log(result.continuationToken);
           
        }

    });
    return result.entries;
}

module.exports = {
    getProperties : getProperties
}



