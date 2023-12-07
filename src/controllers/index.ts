export * from './state.controller';
export * from './card.controller';

import { StateController } from './state.controller';
import { CardController } from './card.controller';

export class Controllers {
  private stateController: StateController;
  private cardController: CardController;

  constructor() {
    this.stateController = new StateController();
    this.cardController = new CardController();
  }
}