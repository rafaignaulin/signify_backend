import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListArtistsUseCase } from "./ListArtistsUseCase";


export class ListArtistsController {
  async handle(request: Request, response: Response): Promise<Response> {

    const listArtistUseCase = container.resolve(ListArtistsUseCase);

    const artists = await listArtistUseCase.execute()

    return response.status(201).json(artists)
  }

}