import { Request, Response } from 'express';
import { LitackaConnector } from '../connectors/litacka.connector';

export class CardController {
  public async getCard(req: Request, res: Response): Promise<void> {
    // [CR] je nutné typovat na number?
    const cardId: number = parseInt(req.params.cardId, 0); // [CR] radix 0? "If 0 or not provided, the radix will be inferred based on string's value. Be careful — this does not always default to 10!"

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
        cardId: cardId, // [CR] tohle je zbytečné, stačí jen cardId
        state: state,
        validTo: validity,
      };

      res.json(cardData);
    } catch (error) {
      // [CR] tohle by mělo být v error handleru a asi by to chtělo nějaký logger, např. winston nebo pino
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}