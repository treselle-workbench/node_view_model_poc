'use strict';

const Hapi = require('hapi');

//const server = new Hapi.Server();
const server = new Hapi.Server({ debug: { request: ['error'] } });

server.connection({ host: '54.146.4.238', port: 3002 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('==>Hello, world!<==');
    }
});

server.route({
    method: 'GET',
    path: '/contentdetails',
    handler: function (request, reply) {
      var responseData = {'response' : ['content1', 'content2', 'content3', 'content4', 'content5']};
        reply(responseData);
    }
});

server.start((err) => {

    /*if (err) {
        throw err;
    }*/
    console.log(`Server running at: ${server.info.uri}`);
});

server.log(['error', 'database', 'read']);
