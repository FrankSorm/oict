import express from 'express';
import bodyParser from 'body-parser';
import { Routes } from './routes';
import { Swagger } from './swagger';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json()); // [CR] je to nutné?
    this.app.use('/swagger', express.static('swagger'));
    this.app.use(bodyParser.json()); // [CR] je to nutné?
    this.app.use(this.jsonErrorHandler); // [CR] tohle pro routes nezafunguje
  }

  private routes(): void {
    const routes = new Routes();
    routes.initRoutes(this.app);

    const swagger = new Swagger(this.app);
    swagger.setup();

  }

  private jsonErrorHandler (err: express.Errback, req: express.Request, res: express.Response, next: express.NextFunction): void {
    res.status(500).send({ error: err });
  }

}

export default App