# NodeJs Rest Api Example hosted in Azure

## Run locally

First install npm packages
```
npm install
```
Run node application
```
npm start
```

## Deploy to Azure
* Login to Azure Portal. [Azure Portal](https://portal.azure.com)
* Create new Node JS Empty Web App.
* Open the created app.
* Navigate to Deployment Credentials.
* Create an user account. The credentials of this user account will be used in the Azure Cli command.
* Install Azure Cli. [See Microsoft guide](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest)
* Login. With "az login" you'll be prompted to open a browser, navigate to a given link and enter the code from the console
```
az login
```
```
az webapp deployment user set --user-name <created_user_account> --password <created_user_pass>
```
```
az webapp deployment source config-local-git --name <NameOfAzureNodeApp> --resource-group <ResourceOfTheAzureNodeApp>
``` 
