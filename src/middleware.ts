import { Request, Response, NextFunction } from 'express';
import { Services } from './services';

export class Middleware {
  private apiKey: string;

  constructor() {
    this.apiKey = new Services().getApiKey();
  }

  public apiKeyAuth = (req: Request, res: Response, next: NextFunction): void => {
    const apiKey: string | undefined = req.header('x-api-key');

    if (!apiKey || apiKey !== this.apiKey) {
      res.status(401).json({ error: 'Unauthorized' });
    } else {
      next();
    }
  }
}
