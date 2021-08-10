import { Artist } from "../entities/Artist";


export interface IArtistRepository {
  create(name: string): void;
  listArtists(): Promise<Artist[]>;
  findByName(name: string): Promise<Artist>;
}
