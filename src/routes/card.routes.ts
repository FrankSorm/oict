import express from 'express';
import { CardController } from '../controllers';
import { Middleware } from '../middleware';

export class CardRoutes {
  private cardController: CardController;
  private middleware: Middleware;

  constructor() {
    this.cardController = new CardController();
    this.middleware = new Middleware();
  }

  public initRoutes(app: express.Application): void {

  /**
   * @swagger
   * components:
   *   securitySchemes:
   *     ApiKeyAuth:
   *       type: apiKey
   *       in: header
   *       name: X-API-Key
   * /card/{cardId}:
   *   get:
   *     summary: Get card information
   *     description: Returns information about a specific card
   *     security:
   *       - ApiKeyAuth: []
   *     parameters:
   *       - in: path
   *         name: cardId
   *         required: true
   *         description: ID of the card to retrieve information about
   *         schema:
   *           type: number
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 cardId:
   *                   type: number
   *                   description: ID of the card
   *                 state:
   *                   type: string
   *                   description: State of the card
   *                 validTo:
   *                   type: string
   *                   description: End of validity date of the card
   *       400:
   *         description: Bad request
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   description: Error message
   *       403:
   *         description: Unauthorized
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   description: Unauthorized message
   */

    app.get('/card/:cardId', this.middleware.apiKeyAuth, this.cardController.getCard);
  }
}