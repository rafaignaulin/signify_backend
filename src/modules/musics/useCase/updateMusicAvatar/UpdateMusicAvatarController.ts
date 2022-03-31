import { Request, Response } from "express";
import { container } from "tsyringe";
import UpdateMusicAvatarUseCase from "./UpdateMusicAvatarUseCase";


export default class UpdateMusicAvatarController{

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const avatar_file = request.file.filename;
    console.log(id)
    const updateMusicAvatarUseCase = container.resolve(UpdateMusicAvatarUseCase);

    await updateMusicAvatarUseCase.execute({music_id: id, avatar_file})

    return response.status(204).send();
  }
}