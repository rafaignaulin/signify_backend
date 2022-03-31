import { Request, Response } from "express";

import { container } from 'tsyringe'
import { DeleteAnnotationUseCase } from "./DeleteAnnotationUseCase";

export class DeleteAnnotationController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { music_id, annotation_id } = request.body;
    const deleteAnnotationUseCase = container.resolve(DeleteAnnotationUseCase)

    await deleteAnnotationUseCase.execute({ music_id, annotation_id });
  
    return response.status(200)
  }
}