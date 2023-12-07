import { Request, Response } from 'express';

export class StateController {
  public getState(req: Request, res: Response): void {
    res.json({ state: 'OK' });
  }
}