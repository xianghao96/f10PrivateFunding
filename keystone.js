// import keystone
var keystone = require('keystone');

// this sets up the keystone instance
keystone.init({
  'cookie secret': 'secure string goes here',
  'name': 'f10 Private Funding', // The name of our KeystoneJS application
  'static': [], // paths to static files to our app
  'user model': 'User',
  'auto update': true,
  'auth': true,
});

keystone.import('./server/models');
keystone.start();