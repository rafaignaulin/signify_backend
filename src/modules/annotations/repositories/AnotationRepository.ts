import { getRepository, Repository } from "typeorm";
import Annotation from "../entities/Annotation";
import { IAnnotationDTO, IAnnotationRepository } from "./implementations/IAnotationRepository";



export class AnnotationRepository implements IAnnotationRepository{
  private repository: Repository<Annotation>;

  constructor() {
    this.repository = getRepository(Annotation);
  }


  async create(data: IAnnotationDTO): Promise<Annotation> {
    const {music_id, music_text, description} = data;

    const annotation = this.repository.create({
      music_id,
      music_text,
      description,
    })

    return await this.repository.save(annotation);

  }
  listAllAnnotationsInMusic(music_id: string): Promise<Annotation[]> {
    throw new Error("Method not implemented.");
  }

}