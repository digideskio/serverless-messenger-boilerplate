'use strict';

require('dotenv').config();
const verify = require('./verify.js');
const bot = require('./bot.js');

/**
 * Adds extra environmental variables
 * @param event
 */
function setEnvVars(event) {
  process.env.SERVERLESS_STAGE = event.stage;
  process.env.SERVERLESS_PROJECT = 'sc5-serverless-messenger-bot';
}

module.exports.handler = (event, context, cb) => {
  setEnvVars(event);
  if (event.method === 'GET') {
    verify.handler(event, cb);
  } else {
    bot.handler(event, cb);
  }
};
