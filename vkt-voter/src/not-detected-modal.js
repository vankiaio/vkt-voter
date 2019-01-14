// This file is part of vkt-voter and is licenced under the Affero GPL 3.0 licence. See LICENCE file for details
let exports = module.exports = {};

var m = require("mithril");
var {EosVoterModal} = require('./eosvoter-modal.js');

class NotDetectedModal extends EosVoterModal {
    canclose() { return false; };
    get_internal_content() {
    return [
             m('h1', 'Could not connect to vankia wallet.'),
             m('h2', 'You need to install vankia wallet'),
             m('a', { href: 'https://github.com/vankiaio/VKScatterDesktop/releases/tag/10.0.5', target: '_blank'}, 'Download vankia wallet'),
             m('p', 'If you are using vankia wallet Desktop you start it and unlock.'),
             m('h2', 'Go back'),
             m('a', { href: '/'}, 'Go back'),
           ];
    }
}

exports.NotDetectedModal = NotDetectedModal;
