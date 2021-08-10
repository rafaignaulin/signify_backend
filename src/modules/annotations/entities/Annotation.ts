import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Music } from "../../musics/entities/Music";

@Entity("annotations")
export default class Annotation {
  @PrimaryColumn()
  id: string;

  @Column()
  music_id: string;

  @ManyToOne(() => Music)
  @JoinColumn({ name: "music_id"})
  music: Music;
    
  @Column()
  music_text: string;  

  @Column()
  description: string;

  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
