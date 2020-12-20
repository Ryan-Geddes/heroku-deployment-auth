'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const swears = mongoose.Schema({
  text: { type: String, required: true },
  date: { type: String },
});



module.exports = mongoose.model('swears', swears);
