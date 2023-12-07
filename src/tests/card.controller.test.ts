import supertest from 'supertest';
import App from '../app';
import { Services } from '../services';

const app = new App();
const sapp = supertest(app.app);

describe('Card Controller Tests', () => {
  it('should return card data with valid api key', async () => {
    const services = new Services();
    const apiKey = services.getApiKey();
    
    const response = await sapp
      .get('/card/123456789000')
      .set('x-api-key', `${apiKey}`);
      
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('cardId', 123456789000);
    expect(response.body).toHaveProperty('state');
    expect(response.body).toHaveProperty('validTo');
  });

  it('should return 401 with invalid api key', async () => {
    const response = await sapp
      .get('/card/123')
      .set('x-api-key', 'invalid-api-key');
    
    expect(response.status).toBe(401);
    expect(response.body).toEqual({ error: 'Unauthorized' });
  });
});
