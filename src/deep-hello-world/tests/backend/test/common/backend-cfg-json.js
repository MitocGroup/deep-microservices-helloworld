export default {
  'env': 'dev',
  'deployId': 'a44dd54d',
  'awsRegion': 'us-west-2',
  'models': [
    {
      'name': {
        'Name': 'string'
      }
    }
  ],
  'identityPoolId': 'us-east-1:xxxxxxxx-xxxx-xxxx-xxxx-xx0123456789',
  'identityProviders': '',
  'microservices': {
    'deep-hello-world': {
      'isRoot': false,
      'parameters': {},
      'resources': {}
    },
    'deep-root-vanilla': {
      'isRoot': true,
      'parameters': {},
      'resources': {}
    }
  },
  'globals': {
    'favicon': '@deep-root-vanilla:img/favicon.ico',
    'pageLoader': {
      'src': '@deep-root-vanilla:img/loader.gif',
      'alt': 'Loading...'
    },
    'engine': {
      'ngRewrite': '/'
    }
  },
  'searchDomains': {},
  'validationSchemas': [
    'name-data'
  ],
  'modelsSettings': [
    {
      'name': {
        'readCapacity': 1,
        'writeCapacity': 1,
        'maxReadCapacity': 10000,
        'maxWriteCapacity': 10000
      }
    }
  ],
  'forceUserIdentity': false,
  'microserviceIdentifier': 'deep-hello-world',
  'awsAccountId': 123456789123,
  'appIdentifier': 'gfhfgdhfghgjgh7687687fghgfhgf',
  'timestamp': 1465996738254,
  'buckets': {
    'temp': {
      'name': 'fdgfd56765gfhjgj768768ghjjhgjhg898-temp'
    },
    'public': {
      'name': 'fdgfd56765gfhjgj768768ghjjhgjhg898-public'
    },
    'private': {
      'name': 'fdgfd56765gfhjgj768768ghjjhgjhg898-private'
    },
    'shared': {
      'name': 'fdgfd56765gfhjgj768768ghjjhgjhg898-shared'
    }
  },
  'tablesNames': {
    'name': 'DeepDevName4a7dbaed'
  },
  'cacheDsn': '',
  'name': 'deep-hello-world-say-hello-create-db',
  'path': './src/deep-hello-world/backend/src/say-hello/create-db/bootstrap.js'
};