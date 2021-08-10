import { Request, Response } from "express";

import { container } from 'tsyringe'
import { CreateMusicUseCase } from "./CreateMusicUseCase";

export default class CreateMusicController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { artist_id,  name, description, lyrics } = request.body;
    const createMusicUseCase = container.resolve(CreateMusicUseCase)
    await createMusicUseCase.execute({artist_id, name, description, lyrics});
  
    return response.status(201).send();
  }
}