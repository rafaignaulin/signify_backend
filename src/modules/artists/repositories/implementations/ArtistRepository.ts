import { getRepository, Repository } from "typeorm";
import { Artist } from "../../entities/Artist";
import { IArtistRepository } from "../IArtistRepository";

export class ArtistRepository implements IArtistRepository {

  private repository: Repository<Artist>;

  constructor(){
    this.repository = getRepository(Artist);
  }

  async create(name: string): Promise<void> {

    const artist = this.repository.create({name})
  
    await this.repository.save(artist);
  }

  async listArtists(): Promise<Artist[]> {
    const artists = await this.repository.find();
    return artists;
  }

  async findByName(name: string): Promise<Artist> {
    const artist = await this.repository.findOne({name})
    return artist;
  }

}