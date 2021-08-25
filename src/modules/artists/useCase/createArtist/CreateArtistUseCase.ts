import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe'
import { IArtistRepository } from '../../repositories/IArtistRepository'


@injectable()
export class CreateArtistUseCase {
  constructor(
    @inject("ArtistRepository")
    private artistRepository: IArtistRepository
    ) {}


  async execute(name:string, description:string): Promise<void> {
  
    const verifyIfArtistExists = await this.artistRepository.findByName(name);
    if(verifyIfArtistExists){
      throw new AppError("Artist Already Exists")
    }

    await this.artistRepository.create({name, description})
  
  }
}