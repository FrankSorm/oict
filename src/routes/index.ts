import express from 'express';
import { StateRoutes } from './state.routes';
import { CardRoutes } from './card.routes';

export class Routes {
  private stateRoutes: StateRoutes;
  private cardRoutes: CardRoutes;

  constructor() {
    this.stateRoutes = new StateRoutes();
    this.cardRoutes = new CardRoutes();
  }

  public initRoutes(app: express.Application): void {
    this.stateRoutes.initRoutes(app);
    this.cardRoutes.initRoutes(app);
  }
}