import { Request, Response } from "express";
import { container } from "tsyringe";
import SearchArtistUseCase from "./SearchArtistUseCase";


export default class SearchArtistController{

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name } = request.query;
    const searchArtistUseCase = container.resolve(SearchArtistUseCase);

    const artist = await searchArtistUseCase.execute({artist_id: id, artist_name:name})

    return response.status(200).json(artist);
  }
}