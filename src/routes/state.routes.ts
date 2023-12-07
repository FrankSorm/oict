import express from 'express';
import { StateController } from '../controllers';

export class StateRoutes {
  private stateController: StateController;

  constructor() {
    this.stateController = new StateController();
  }

  public initRoutes(app: express.Application): void {

  /**
   * @swagger
   * /state:
   *   get:
   *     summary: Get state
   *     description: Returns the state of the application
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 state:
   *                   type: string
   *                   description: Application state
   */

    app.get('/state', this.stateController.getState);
  }
}