import { inject, injectable } from "tsyringe";
import { Music } from "../../entities/Music";
import { IMusicRepository } from "../../repositories/IMusicRepository";


@injectable()
export class ListArtistMusicsUseCase {
  constructor(
    @inject("MusicRepository")
    private musicRepository: IMusicRepository) {}

  async execute(artist_id: string): Promise<Music[]> {
    const musics = await this.musicRepository.findArtist(artist_id);

    return musics;
  }
}