import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";


@Entity("artists")
export class Artist {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
        this.id = uuidV4();
    }
}

}