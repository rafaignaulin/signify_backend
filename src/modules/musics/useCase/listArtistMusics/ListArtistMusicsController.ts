import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListArtistMusicsUseCase } from "./ListArtistMusicsUseCase";


export default class ListArtistMusicsController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { artist_id } = request.params;

    const listArtistMusicsUseCase = container.resolve(ListArtistMusicsUseCase);

    const musics = await listArtistMusicsUseCase.execute(artist_id);
    
    return response.json(musics);
  }

}