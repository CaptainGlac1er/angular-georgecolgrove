import {
    AngularNodeAppEngine,
    createNodeRequestHandler,
    isMainModule,
    writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express, {Express} from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';


const app = express();
const angularApp = new AngularNodeAppEngine();

export function setupSSR(app: Express) {
    const serverDistFolder = dirname(fileURLToPath(import.meta.url));
    const browserDistFolder = resolve(serverDistFolder, '../browser');
    const indexHtml = join(browserDistFolder, 'index.html');

    // Serve static files from /browser (Fixes the '**' wildcard error)
    app.use(express.static(browserDistFolder, { maxAge: '1y' }));

    // All routes use the Angular engine
    app.use((req, res, next) => {
        angularApp
            .handle(req, indexHtml)
            .then((response) =>
                response ? writeResponseToNodeResponse(response, res) : next()
            )
            .catch(next);
    });
}

const port = process.env['PORT'] || 4000;

export function bootstrap(): void {
    setupSSR(app);
    app.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}

// Run the server only if this is the main module (standard for serverless/standard setups)
if (isMainModule(import.meta.url)) {
    bootstrap();
}

// Create request handler for serverless environments
export const reqHandler = createNodeRequestHandler(app);