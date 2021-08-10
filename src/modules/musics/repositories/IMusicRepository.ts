import { Music } from "../entities/Music";


export interface ICreateMusicDTO {
  artist_id: string;
  name: string;
  description: string;
  lyrics: string;
}

export interface IMusicRepository {
  create({artist_id, name, description, lyrics}:ICreateMusicDTO): void;
  findById(id: string): Promise<Music>;
  findByName(name: string): Promise<Music>;
  findArtist(artist_id : string): Promise<Music[]>;
}
