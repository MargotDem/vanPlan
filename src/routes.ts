import { IncomingMessage, ServerResponse } from 'http'

const routes = [
    {
        method: "GET",
        url: "/api/tags",
        handler: async (req: IncomingMessage, res: ServerResponse) => {
            let tags = {
                tag1: "blablabla",
                tag2: "hohoho",
            }
            return tags
        },
    },
]

module.exports = routes;
