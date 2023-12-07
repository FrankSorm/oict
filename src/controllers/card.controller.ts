import { Request, Response } from 'express';
import { LitackaConnector } from '../connectors/litacka.connector';

export class CardController {
  public async getCard(req: Request, res: Response): Promise<void> {
    const cardId: number = parseInt(req.params.cardId, 0);

    if (isNaN(cardId)) {
      res.status(400).json({ error: 'cardId parameter is required and has to be number' });
      return;
    }

    if (cardId === 0) {
      res.status(400).json({ error: 'cardId parameter can\'t be 0' });
      return;
    }

    try {
      const litackaConnector = new LitackaConnector();
      const state = await litackaConnector.getCardState(cardId);
      const validity = await litackaConnector.getCardValidity(cardId); 

      const cardData = {
        cardId: cardId,
        state: state,
        validTo: validity,
      };

      res.json(cardData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}