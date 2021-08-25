import { Request, Response } from "express";
import { container } from "tsyringe";
import { SearchMusicUseCase } from "./SearchMusicUseCase";


export default class SearchMusicController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { id, name } = request.body;

    const searchMusicUseCase = container.resolve(SearchMusicUseCase);

    const musics = await searchMusicUseCase.execute({music_id: id, music_name: name});
    
    return response.json(musics);
  }

}