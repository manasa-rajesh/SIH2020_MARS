const mongoose = require('mongoose');

const upload = new mongoose.Schema({
    pdf: {type: String},
    ppt: {type: String},
    questionBank: {type: String},
    createdAt: {type: String},
    name: {type: String}
})

module.exports = mongoose.model('Upload', upload);