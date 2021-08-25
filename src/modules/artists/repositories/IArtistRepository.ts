import { Artist } from "../entities/Artist";
import { ICreateArtistDTO } from "./dtos/ICreateArtistDTO";


export interface IArtistRepository {
  create(data: ICreateArtistDTO): void;
  listArtists(): Promise<Artist[]>;
  findById(id: string): Promise<Artist>;
  findByName(name: string): Promise<Artist>;
}
