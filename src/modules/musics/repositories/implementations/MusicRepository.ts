import { getRepository, Repository } from "typeorm";

import { Music } from "../../entities/Music";

import { ICreateMusicDTO, IMusicRepository } from "../IMusicRepository";

export class MusicRepository implements IMusicRepository {

  private repository: Repository<Music>;

  constructor(){
    this.repository = getRepository(Music);
  }

  async create({artist_id ,name, description,avatar, lyrics}: ICreateMusicDTO): Promise<void> {

    const music = this.repository.create({
      artist_id,
      name,
      description,
      avatar,
      lyrics
    })
  
    await this.repository.save(music);
  }

  async findById(id: string): Promise<Music> {
    const music = await this.repository.findOne(id);
    return music;
  }

  async findArtist(artist_id: string): Promise<Music[]> {
    const artist_musics = await this.repository.find({artist_id})
    if(!artist_musics){
      throw new Error("Artist Doesnt Exists!");
    }
    return artist_musics;
  }

  async findByName(name: string): Promise<Music> {
    const music = await this.repository.findOne({name})
    return music;
  }

}