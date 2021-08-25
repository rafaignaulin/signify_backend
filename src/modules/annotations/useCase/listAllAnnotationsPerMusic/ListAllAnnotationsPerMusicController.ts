import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllAnnotationsPerMusicUseCase } from "./ListAllAnnotationsPerMusicUseCase";



export class ListAllAnnotationsPerMusicController {


  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const listAllAnnotationsPerMusicUseCase = container.resolve(ListAllAnnotationsPerMusicUseCase);

    const annotations = await listAllAnnotationsPerMusicUseCase.execute(id);
    return response.json(annotations);

  }

}