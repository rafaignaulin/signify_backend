import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Artist } from '../../artists/entities/Artist';

@Entity("musics")
export class Music { 
  @PrimaryColumn()
  id?: string;

  @Column()
  artist_id: string;
  
  @ManyToOne(() => Artist)
  @JoinColumn({ name: "artist_id"})
  artist: Artist;

  @Column()
  name: string;
  
  @Column()
  description: string;

  @Column()
  avatar: string;
  
  @Column()
  playback_url: string;

  @Column("text")
  lyrics: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuidV4();
    }
  }
}