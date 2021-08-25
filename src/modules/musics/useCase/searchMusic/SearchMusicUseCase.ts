import { inject, injectable } from "tsyringe";
import { Music } from "../../entities/Music";
import { IMusicRepository } from "../../repositories/IMusicRepository";

interface IRequest {
  music_id?: string;
  music_name?: string;
}

@injectable()
export class SearchMusicUseCase {
  constructor(
    @inject("MusicRepository")
    private musicRepository: IMusicRepository) {}

  async execute({music_id, music_name}: IRequest): Promise<Music> {
    if(music_id){
      const music = await this.musicRepository.findById(music_id);
      return music;

    }
    if(music_name){
      const music = await this.musicRepository.findByName(music_name);
      return music;
    }
  }
}