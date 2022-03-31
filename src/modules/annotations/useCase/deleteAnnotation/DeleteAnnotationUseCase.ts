import { inject, injectable } from 'tsyringe'
import AppError from '../../../../shared/errors/AppError';
import { IMusicRepository } from '../../../musics/repositories/IMusicRepository';
import Annotation from '../../entities/Annotation';
import { IAnnotationRepository } from '../../repositories/implementations/IAnotationRepository';


interface IRequest {
  music_id: string;
  annotation_id: string;
}

@injectable()
export class DeleteAnnotationUseCase {
  
  constructor(
    @inject("AnnotationRepository")
    private annotationRepository: IAnnotationRepository,
    @inject("MusicRepository")
    private musicRepository: IMusicRepository
    ) {}


  async execute({ music_id, annotation_id } : IRequest): Promise<void> {

    const music = await this.musicRepository.findById(music_id);

    if(!music) {
      throw new AppError("Music does not exists!") // Verificacao se existe aquela musica
    }

    await this.annotationRepository.delete(annotation_id)

  }
}