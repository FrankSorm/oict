import dotenv from 'dotenv';

dotenv.config();

export class Services {
  public getApiKey(): string {
    return process.env.API_KEY || '';
  }
}