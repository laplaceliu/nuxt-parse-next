import Vue from 'vue'

export default ( context, inject ) => {
    let Parse = undefined
    if (process.client) {
        Parse = require('parse')
    } else {
        Parse = require('parse/node')
    }

    Parse.initialize('<%= options.appId %>', '<%= options.javascriptKey %>');

    Parse.serverURL = '<%= options.serverUrl %>'
    
    // Vue.prototype.$parse = Parse;
    // context.$parse = Parse;
    inject('parse', Parse);
}
