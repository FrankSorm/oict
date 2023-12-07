import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

export class Swagger {
  private app: express.Application;

  constructor(app: express.Application) {
    this.app = app;
  }

  public setup(): void {
    const options = {
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'Operator ICT',
          version: '1.0.0',
        },
      },
      apis: ['./src/routes/*.ts'],
    };

    const swaggerSpec = swaggerJsdoc(options);

    this.app.use('/swagger.json', (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(swaggerSpec);
    });

    this.app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }
}