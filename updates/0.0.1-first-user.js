var keystone = require('keystone');
var User = keystone.list('User');

exports.create = {
    User: [
      {
        displayName: 'samuel',
        email: 'tanxianghao@hotmail.com',
        password: 'admin',
      },
    ],
  };