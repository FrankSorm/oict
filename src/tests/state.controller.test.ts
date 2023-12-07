import supertest from 'supertest';
import App from '../app';

const app = new App();
const sapp = supertest(app.app);

describe('State Controller Tests', () => {
  it('should return OK state', async () => {
    const response = await sapp.get('/state');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ state: 'OK' });
  });
});