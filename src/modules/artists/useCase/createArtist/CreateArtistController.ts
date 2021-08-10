import { Request, Response } from "express";

import { container } from 'tsyringe'
import { CreateArtistUseCase } from "./CreateArtistUseCase";


export default class CreateArtistController {

  async handle(request: Request, response: Response): Promise<Response>{
    const {name} = request.body;
    const createArtistUseCase = container.resolve(CreateArtistUseCase);
    await createArtistUseCase.execute(name);
  
    return response.status(201).send();
  }
}