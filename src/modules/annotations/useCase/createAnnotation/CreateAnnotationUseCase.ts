import { inject, injectable } from 'tsyringe'
import AppError from '../../../../shared/errors/AppError';
import { IMusicRepository } from '../../../musics/repositories/IMusicRepository';
import Annotation from '../../entities/Annotation';
import { IAnnotationRepository } from '../../repositories/implementations/IAnotationRepository';


interface IRequest {
  music_id: string;
  music_text: string;
  description: string;
}

@injectable()
export class CreateAnnotationUseCase {
  
  constructor(
    @inject("AnnotationRepository")
    private annotationRepository: IAnnotationRepository,
    @inject("MusicRepository")
    private musicRepository: IMusicRepository
    ) {}


  async execute({ music_id, music_text, description } : IRequest): Promise<Annotation> {

    const music = await this.musicRepository.findById(music_id);

    if(!music) {
      throw new AppError("Music does not exists!") // Verificacao se existe aquela musica
    }

    if(!music.lyrics.includes(music_text)){ //Verificacao se encontra o texto naquela musica.
      throw new AppError("This part of the Music does not exists!")    
    }
    const annotation = await this.annotationRepository.create({ music_id, music_text, description })

    return annotation;
  
  }
}