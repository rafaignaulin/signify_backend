import { Request, Response } from "express";

import { container } from 'tsyringe'
import { CreateAnnotationUseCase } from "./CreateAnnotationUseCase";

export class CreateAnnotationController {

  async handle(request: Request, response: Response): Promise<Response>{
    const { music_id, music_text, description } = request.body;
    const createAnnotationUseCase = container.resolve(CreateAnnotationUseCase)

    const annotation = await createAnnotationUseCase.execute({ music_id, music_text, description });
  
    return response.status(201).json(annotation);
  }
}