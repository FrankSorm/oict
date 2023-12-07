import axios from 'axios';
import moment from 'moment';

export class LitackaConnector {
  public async getCardState(cardId: number): Promise<string> {
    try {
      const response = await axios.get(`http://private-264465-litackaapi.apiary-mock.com/cards/${cardId}/state`);
      return response.data.state_description;
      // TODO check errors to process 404 etc.
    } catch (error) {
    //   console.error(error);
      throw new Error('Failed to get card state from litackaapi');
    }
  }

  public async getCardValidity(cardId: number): Promise<string> {
    try {
      const response = await axios.get(`http://private-264465-litackaapi.apiary-mock.com/cards/${cardId}/validity`);
      return moment(response.data.validity_end).format('DD.MM.YYYY');
      // TODO check errors to process 404 etc.
    } catch (error) {
    //   console.error(error);
      throw new Error('Failed to get card validity from litackaapi');
    }
  }
}
