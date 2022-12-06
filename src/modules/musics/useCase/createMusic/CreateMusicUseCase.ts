import { inject, injectable } from 'tsyringe'
import AppError from '../../../../shared/errors/AppError';
import { ICreateMusicDTO, IMusicRepository } from '../../repositories/IMusicRepository'




@injectable()
export class CreateMusicUseCase {
  
  constructor(
    @inject("MusicRepository")
    private musicRepository: IMusicRepository) {}


  async execute({artist_id, name, description, playback_url, avatar, lyrics} : ICreateMusicDTO): Promise<void> {
  
    const verifyIfArtistExists = await this.musicRepository.findArtist(artist_id)
    if(!verifyIfArtistExists){
      throw new Error("Artist Doesnt Exists!");
    }

    const verifyIfMusicExists = await this.musicRepository.findByName(name);
    if(verifyIfMusicExists){
      throw new AppError("Music Already Exists")
    }

    await this.musicRepository.create({
      artist_id,
      name,
      description,
      playback_url,
      avatar,
      lyrics
    })
  
  }
}