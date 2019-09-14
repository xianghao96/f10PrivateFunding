var keystone = require('keystone');
var Types = keystone.Field.Types;

var User = new keystone.List('User'); // this creates a user list

User.add({
    displayName: { type: String },
    password: { type: keystone.Field.Types.Password },
    email: { type: keystone.Field.Types.Email, unique: true },
  });

User.schema.virtual('canAccessKeystone').get(function() {
    return true;
});

User.defaultColumns = 'id, displayName, email';
User.register();