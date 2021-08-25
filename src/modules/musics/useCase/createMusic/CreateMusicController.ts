import { Request, Response } from "express";

import { container } from 'tsyringe'
import { CreateMusicUseCase } from "./CreateMusicUseCase";

export default class CreateMusicController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const { name, description, lyrics } = request.body;
    //const avatar_file = request.file.filename;

    const createMusicUseCase = container.resolve(CreateMusicUseCase)
    await createMusicUseCase.execute({artist_id: id, name, description, lyrics});
  
    return response.status(201).send();
  }
}