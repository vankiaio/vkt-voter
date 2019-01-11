// This file is part of vkt-voter and is licenced under the Affero GPL 3.0 licence. See LICENCE file for details
// This file holds global state relating to the voting front end

let globals = module.exports = {};

globals.scatter = null; //old scatter
globals.network = {};
globals.eosOptions = {};
globals.network_secure = {};
globals.registered_producers = new Set();
globals.connectionOptions = {initTimeout:10000};
globals.eosjsOptions = {expirtInSeconds:600};
globals.httpEndpoint = 'http://221.122.119.226:8888';