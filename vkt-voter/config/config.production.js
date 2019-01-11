var config = require('./config.global');

config.chain_addr = '221.122.119.226'
// Port to connect to the API
config.chain_port = '8888'
// Protocol to use. Valid choices are http or https
config.protocol = 'http'
// If we are using https we need a different port here
config.chain_secure_port = '8888'

// User readable name for the chain
config.chain_name = 'VKT Mainnet';

config.mongodb_server = '127.0.0.1';

module.exports = config;
