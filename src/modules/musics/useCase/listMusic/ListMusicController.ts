import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMusicUseCase } from "./ListMusicUseCase";


export default class ListMusicController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { id, name } = request.body;

    const listMusicUseCase = container.resolve(ListMusicUseCase);

    const musics = await listMusicUseCase.execute();
    
    return response.json(musics);
  }

}