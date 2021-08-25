import Annotation from "@modules/annotations/entities/Annotation";
import { IAnnotationRepository } from "@modules/annotations/repositories/implementations/IAnotationRepository";
import { IMusicRepository } from "@modules/musics/repositories/IMusicRepository";
import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListAllAnnotationsPerMusicUseCase {

  constructor(
    @inject("AnnotationRepository")
    private annotationRepository: IAnnotationRepository,
    @inject("MusicRepository")
    private musicRepository: IMusicRepository
    ) {}


  async execute(music_id): Promise<Annotation[]> {

    // Procurar pela musica
    const music = await this.musicRepository.findById(music_id);
    if(!music){
      throw new AppError("Music does not exists!");
    }
    //Listar todas as anotacoes daquela musica
    const annotations = await this.annotationRepository.listAllAnnotationsInMusic(music_id);
    return annotations;
  }
}