import { Music } from "../entities/Music";


export interface ICreateMusicDTO {
  artist_id: string;
  name: string;
  description: string;
  playback_url:string;
  avatar: string;
  lyrics: string;
}

export interface IMusicRepository {
  create({artist_id, name, description,playback_url,avatar,lyrics}:ICreateMusicDTO): void;
  delete(id: string): void;
  findById(id: string): Promise<Music>;
  findByName(name: string): Promise<Music>;
  findArtist(artist_id : string): Promise<Music[]>;
  findAll(): Promise<Music[]>;
}
