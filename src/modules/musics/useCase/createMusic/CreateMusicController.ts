import { Request, Response } from "express";

import { container } from 'tsyringe'
import { CreateMusicUseCase } from "./CreateMusicUseCase";

export default class CreateMusicController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const { name, description, playback_url, lyrics } = request.body;
    console.log(name, description, playback_url, lyrics)
    const createMusicUseCase = container.resolve(CreateMusicUseCase)
    await createMusicUseCase.execute({artist_id: id, name, description, playback_url, avatar:undefined, lyrics});
  
    return response.status(201).send();
  }
}