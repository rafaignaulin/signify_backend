import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteMusicUseCase } from "./DeleteMusicUseCase";


export default class DeleteMusicController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
    const deleteMusicUseCase = container.resolve(DeleteMusicUseCase);

    await deleteMusicUseCase.execute({music_id: id});
    
    return response.status(204).send();
  }

}