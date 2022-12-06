import { Artist } from "@modules/artists/entities/Artist";
import { getRepository, Repository, SelectQueryBuilder } from "typeorm";

import { Music } from "../../entities/Music";

import { ICreateMusicDTO, IMusicRepository } from "../IMusicRepository";

export class MusicRepository implements IMusicRepository {

  private repository: Repository<Music>;

  constructor(){
    this.repository = getRepository(Music);
  }

  async create({artist_id ,name, description, playback_url, avatar, lyrics}: ICreateMusicDTO): Promise<void> {

    const music = this.repository.create({
      artist_id,
      name,
      description,
      playback_url,
      avatar,
      lyrics
    })
  
    await this.repository.save(music);
  }

  async delete(id:string) : Promise<void> {
    await this.repository.delete(id)
  }

  async findById(id: string): Promise<Music> {
    const query = this.repository.createQueryBuilder('m')
    .innerJoinAndSelect('m.artist', 'a', 'm.artist_id = a.id').select(['m', 'a.id', 'a.name']).where('m.id = :id',{id}); // 'w.userId = u.id' may be omitted
    const result = await query.getOne();
    return result;
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

  async findAll(): Promise<Music[]> {
    const query = this.repository.createQueryBuilder('m')
    .innerJoinAndSelect('m.artist', 'a', 'm.artist_id = a.id').select(['m.id', 'm.name', 'm.avatar', 'a.id', 'a.name']); // 'w.userId = u.id' may be omitted
  const result = await query.getMany();
  return result
  }
}