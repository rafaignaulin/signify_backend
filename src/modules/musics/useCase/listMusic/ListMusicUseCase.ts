import { inject, injectable } from "tsyringe";
import { Music } from "../../entities/Music";
import { IMusicRepository } from "../../repositories/IMusicRepository";


@injectable()
export class ListMusicUseCase {
  constructor(
    @inject("MusicRepository")
    private musicRepository: IMusicRepository) {}

  async execute(): Promise<Music[]> {
      const musics = await this.musicRepository.findAll();
      return musics;
  }
}