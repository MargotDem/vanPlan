import * as fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({ logger: true })
const port = 3000;
const routes = require("./routes");

server
    .ready(err => {
        if (err) console.error(err);
    });

routes.forEach((route: fastify.RouteOptions) => {
    server.route(route);
});

const start = async () => {
    try {
        await server.listen(port)
        server.log.info(`server listening on ${port}`)
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}
start()
