import { inject, injectable } from 'tsyringe'
import { IArtistRepository } from '../../repositories/IArtistRepository'


@injectable()
export class CreateArtistUseCase {
  constructor(
    @inject("ArtistRepository")
    private artistRepository: IArtistRepository
    ) {}


  async execute(name:string): Promise<void> {
  
    await this.artistRepository.create(name)
  
  }
}