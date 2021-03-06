// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46153750-fa3b-4140-bf57-8beb7d5c971a',
    name: 'KonaMDI3_697842',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2643\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2643\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3073.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-21T00:47:48.2931124Z\",\"lastModifiedTime\":\"2015-11-21T00:47:48.2931124Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073\",\"name\":\"xplattestadla3073\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c1b78cee-a03e-4c20-acd0-d83b1b5b42df',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14911',
  'x-ms-correlation-request-id': 'd9802191-0717-4974-b8f4-11d9b1ea4531',
  'x-ms-routing-request-id': 'WESTUS:20151121T004824Z:d9802191-0717-4974-b8f4-11d9b1ea4531',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 21 Nov 2015 00:48:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2643\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2643\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3073.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-21T00:47:48.2931124Z\",\"lastModifiedTime\":\"2015-11-21T00:47:48.2931124Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073\",\"name\":\"xplattestadla3073\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'c1b78cee-a03e-4c20-acd0-d83b1b5b42df',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14911',
  'x-ms-correlation-request-id': 'd9802191-0717-4974-b8f4-11d9b1ea4531',
  'x-ms-routing-request-id': 'WESTUS:20151121T004824Z:d9802191-0717-4974-b8f4-11d9b1ea4531',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 21 Nov 2015 00:48:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2643\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2643\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3073.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-21T00:47:48.2931124Z\",\"lastModifiedTime\":\"2015-11-21T00:47:48.2931124Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073\",\"name\":\"xplattestadla3073\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '51a218b8-a62e-4313-9f5d-eca6632e2705',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '5be0096e-71b4-4344-b547-324ad58fbc75',
  'x-ms-routing-request-id': 'WESTUS:20151121T004825Z:5be0096e-71b4-4344-b547-324ad58fbc75',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 21 Nov 2015 00:48:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2643\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2643\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3073.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-21T00:47:48.2931124Z\",\"lastModifiedTime\":\"2015-11-21T00:47:48.2931124Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073\",\"name\":\"xplattestadla3073\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '746',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '51a218b8-a62e-4313-9f5d-eca6632e2705',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '5be0096e-71b4-4344-b547-324ad58fbc75',
  'x-ms-routing-request-id': 'WESTUS:20151121T004825Z:5be0096e-71b4-4344-b547-324ad58fbc75',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 21 Nov 2015 00:48:24 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2643\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2643\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3073.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-21T00:47:48.2931124Z\",\"lastModifiedTime\":\"2015-11-21T00:48:25.176812Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073\",\"name\":\"xplattestadla3073\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '769',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd625b875-6ac7-42e5-bd05-bd33dda5ed30',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '82bcc70c-9b74-43bb-98a3-530672c9a298',
  'x-ms-routing-request-id': 'WESTUS:20151121T004827Z:82bcc70c-9b74-43bb-98a3-530672c9a298',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 21 Nov 2015 00:48:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073?api-version=2015-10-01-preview', '*')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2643\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2643\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3073.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-21T00:47:48.2931124Z\",\"lastModifiedTime\":\"2015-11-21T00:48:25.176812Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073\",\"name\":\"xplattestadla3073\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '769',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'd625b875-6ac7-42e5-bd05-bd33dda5ed30',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '82bcc70c-9b74-43bb-98a3-530672c9a298',
  'x-ms-routing-request-id': 'WESTUS:20151121T004827Z:82bcc70c-9b74-43bb-98a3-530672c9a298',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 21 Nov 2015 00:48:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2643\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2643\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3073.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-21T00:47:48.2931124Z\",\"lastModifiedTime\":\"2015-11-21T00:48:25.176812Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073\",\"name\":\"xplattestadla3073\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '769',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b24480ef-a270-4b9a-90cd-6f18df452e46',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14948',
  'x-ms-correlation-request-id': '7bc9d188-8ec6-46d7-9ee7-d533e8f0e782',
  'x-ms-routing-request-id': 'WESTUS:20151121T004828Z:7bc9d188-8ec6-46d7-9ee7-d533e8f0e782',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 21 Nov 2015 00:48:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073?api-version=2015-10-01-preview')
  .reply(200, "{\"properties\":{\"defaultDataLakeStoreAccount\":\"xplattestadls2643\",\"dataLakeStoreAccounts\":[{\"properties\":{\"suffix\":\"azuredatalakestore.net\"},\"name\":\"xplattestadls2643\"}],\"storageAccounts\":[],\"maxDegreeOfParallelism\":20,\"maxJobCount\":3,\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3073.azuredatalakeanalytics.net\",\"creationTime\":\"2015-11-21T00:47:48.2931124Z\",\"lastModifiedTime\":\"2015-11-21T00:48:25.176812Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\",\"testtag3\":\"testvalue3\"},\"id\":\"/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073\",\"name\":\"xplattestadla3073\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '769',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b24480ef-a270-4b9a-90cd-6f18df452e46',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14948',
  'x-ms-correlation-request-id': '7bc9d188-8ec6-46d7-9ee7-d533e8f0e782',
  'x-ms-routing-request-id': 'WESTUS:20151121T004828Z:7bc9d188-8ec6-46d7-9ee7-d533e8f0e782',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 21 Nov 2015 00:48:27 GMT',
  connection: 'close' });
 return result; }]];