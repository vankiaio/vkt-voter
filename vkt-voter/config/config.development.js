var config = require('./config.global');

// Jungle TestNet
// IP address or Domain of the API end point

/*
config.chain_addr = 'dev.cryptolions.io'
// Port to connect to the API
config.chain_port = '38888'
// Protocol to use. Valid choices are http or https
config.protocol = 'http'
config.chain_secure_port = '38888'
*/


//If connecting via the vankia wallet use these settings
config.chain_addr = '221.122.119.226'
// Port to connect to the API
config.chain_port = '8888'
// Protocol to use. Valid choices are http or https
config.protocol = 'http'
// If we are using https we need a different port here
config.chain_secure_port = '8888'




/*
//If connecting via the vankia wallet desktop application use these settings
config.chain_addr = 'node1.eosphere.io'
// Port to connect to the API
config.chain_port = '443'
// Protocol to use. Valid choices are http or https
config.protocol = 'https'
// If we are using https we need a different port here
config.chain_secure_port = '443'
*/

// User readable name for the chain
config.chain_name = 'VKT Mainnet';
//config.chain_name = 'Jungle Testnet';

config.bp_info_refresh_secs = 60;

config.mongodb_server = 'mongo';

module.exports = config;
