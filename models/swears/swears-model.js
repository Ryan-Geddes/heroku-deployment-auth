'use strict';

const Model = require('../mongo.js');
const schema = require('./swears-schema.js');

/**
 * Class representing a Category.
 * @extends Model
 */
class Swears extends Model {
  constructor() { super(schema); }
}

module.exports = Swears;
