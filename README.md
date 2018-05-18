# Azure-Function-DeleteBlobs-WithSearchIndex


This Project is to purge documents regularly.

We have created a azure search index to capture the documents in the Azure Blob Storage which are marked for deletion with a blob metadata
property. The Search index will capture those documents information. 

This timer azure function runs every month and query the search index to find the documents marked for deletion and modified date is 
older that 90 days.

Then this function will delete those blobs from the azure blob storage. 

