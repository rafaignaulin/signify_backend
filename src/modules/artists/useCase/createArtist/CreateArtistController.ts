import { Request, Response } from "express";

import { container } from 'tsyringe'
import { CreateArtistUseCase } from "./CreateArtistUseCase";


export  class CreateArtistController {

  async handle(request: Request, response: Response): Promise<Response>{
    const {name, description} = request.body;
    const createArtistUseCase = container.resolve(CreateArtistUseCase);
    await createArtistUseCase.execute(name, description);
  
    return response.status(201).send();
  }
}