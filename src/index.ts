import * as fastify from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'http'
const server: fastify.FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({ logger: true })

const port = 3000;
const routes = require("./routes");

routes.forEach((route: fastify.RouteOptions) => {
    server.route(route);
});

// server.get('/test', async function (req, res) {


// })

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


