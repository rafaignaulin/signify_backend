import { inject, injectable } from "tsyringe";
import { Music } from "../../entities/Music";
import { IMusicRepository } from "../../repositories/IMusicRepository";

interface IRequest {
  music_id: string;
}

@injectable()
export class DeleteMusicUseCase {
  constructor(
    @inject("MusicRepository")
    private musicRepository: IMusicRepository) {}

  async execute({music_id}: IRequest): Promise<void> {
    await this.musicRepository.delete(music_id);
    
  }
}