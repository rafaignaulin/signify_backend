import { inject, injectable } from "tsyringe";
import { Artist } from "../../entities/Artist";
import { IArtistRepository } from "../../repositories/IArtistRepository";

@injectable()
export class ListArtistsUseCase {

  constructor(
    @inject("ArtistRepository")
    private artistRepository: IArtistRepository
  ){}

  async execute(): Promise<Artist[]> {

    const artists = this.artistRepository.listArtists()
    
    return artists;
  }

}