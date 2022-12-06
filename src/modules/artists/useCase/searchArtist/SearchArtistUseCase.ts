import { Artist } from "@modules/artists/entities/Artist";
import { IArtistRepository } from "@modules/artists/repositories/IArtistRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  artist_id: string;
  artist_name: string;
}

@injectable()
export default class SearchArtistUseCase {
  constructor(
    @inject("ArtistRepository")
    private artistRepository: IArtistRepository
  ){}

  async execute({artist_id, artist_name}: IRequest): Promise<Artist> {
    if(artist_id){
      const artist = await this.artistRepository.findById(artist_id);
      return artist;

    }
    if(artist_name){
      const artist = await this.artistRepository.findByName(artist_name);
      return artist;
    }
  }

}