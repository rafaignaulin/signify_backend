import { Request, Response } from "express";
import { container } from "tsyringe";
import UpdateArtistAvatarUseCase from "./UpdateArtistAvatarUseCase";


export default class UpdateArtistAvatarController{

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const avatar_file = request.file.filename;

    const updateArtistAvatarUseCase = container.resolve(UpdateArtistAvatarUseCase);

    await updateArtistAvatarUseCase.execute({artist_id: id, avatar_file})

    return response.status(204).send();
  }
}