
/**
 * Anotacao de Lyrics dentro da musica:
 * 
 *  artist_id:string; // VERIFICAR RELACIONAMENTOS ONE TO MANY COM O ARTISTA (PARA PROCURAR MAIS RAPIDO)
 *  music_id:string;
 *  music_text: string; //Parte da musica que quer destacar
 *  description: string;
 *  
 */

import Annotation from "../../entities/Annotation";


export interface IAnnotationDTO{
  music_id: string;
  music_text: string; //Parte da musica que quer destacar
  description: string;
}

export interface IAnnotationRepository {
  create(data: IAnnotationDTO): Promise<Annotation>;
  listAllAnnotationsInMusic(music_id:string): Promise<Annotation[]>;
}