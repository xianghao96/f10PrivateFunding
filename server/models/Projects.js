var keystone = require('keystone');
var Types = keystone.Field.Types;
var path = require('path');

// create a new Keystone list called Projects
var Projects = new keystone.List('Projects', {
    autokey: { path: 'slug', from: 'name', unique: true},
    defaultSort: '-createdAt',
});

// Adding the option to add images/ screenshots of Project application such as ID, past records etc.
var projectImageStorage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        path: keystone.expandPath('server/img'), // this is required, the path where the files should be stored
        generateFilename: function (file, index) {
            return file.originalname;
        },
        whenExists: 'error',
        publicPath: '/public/img', // path where files will be served
    },
});

// add fields required for application
Projects.add({
    name: { type: String, required: true },
    NRIC: { type: String },
    loanAmount: { type: Number },
    date: Date,
    percentageOfReturn: { type: Number },
    image: {
        type: Types.File,
        storage: projectImageStorage,
        mimetype: '.jpeg, .jpg, .gif, .svg',
    }, 
    projectDescription: { type: Types.Html, wysiwyg: true, height: 150 }
});

// set the default order of columns on admin tab
Projects.defaultColumns = 'name, NRIC, loanAmount, date, percentageOfReturn, image, projectDescription ';
Projects.register();
