import "reflect-metadata";
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import { bindings } from "./inversify.config";

// (async () => {

//     const port = 3000;
//     const container = new Container();
//     await container.loadAsync(bindings);
//     const app = new InversifyExpressServer(container);
//     const server = app.build();

//     module.exports = server.listen(port, () => {
//         console.log(`Server running at http://127.0.0.1:${port}/`)
//     });

// })();

// module.exports = async () => {

const port = 3000;
const container = new Container();
let server;
container.loadAsync(bindings)
    .then(() => {
        const app = new InversifyExpressServer(container);
        server = app.build();

        server.listen(port, () => {
            console.log(`Server running at http://127.0.0.1:${port}/`)
        });

        exports = module.exports = server;
    })

// }; 
exports = module.exports = server;