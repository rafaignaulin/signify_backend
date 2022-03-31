import { IArtistRepository } from "@modules/artists/repositories/IArtistRepository";
import { IMusicRepository } from "@modules/musics/repositories/IMusicRepository";
import { deleteFile } from "@utils/file";
import { inject, injectable } from "tsyringe";

interface IRequest {
  music_id: string;
  avatar_file: string;
}

@injectable()
export default class UpdateMusicAvatarUseCase {
  constructor(
    @inject("MusicRepository")
    private musicRepository: IMusicRepository
  ){}

  async execute({music_id, avatar_file}: IRequest): Promise<void> {
    const music = await this.musicRepository.findById(music_id);

    if (music.avatar) {
      await deleteFile(`./tmp/avatar/${music.avatar}`);
    }
    music.avatar = avatar_file;
  
    await this.musicRepository.create(music);
  }

}