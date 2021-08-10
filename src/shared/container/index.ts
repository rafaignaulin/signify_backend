import {container} from 'tsyringe'
import { IAnnotationRepository } from '../../modules/annotations/repositories/implementations/IAnotationRepository'
import { AnnotationRepository } from '../../modules/annotations/repositories/AnotationRepository'
import { IArtistRepository } from '../../modules/artists/repositories/IArtistRepository'
import { ArtistRepository } from '../../modules/artists/repositories/implementations/ArtistRepository'
import { MusicRepository } from '../../modules/musics/repositories/implementations/MusicRepository'
import { IMusicRepository } from '../../modules/musics/repositories/IMusicRepository'

container.registerSingleton<IMusicRepository>(
  'MusicRepository', MusicRepository
)

container.registerSingleton<IArtistRepository>(
  'ArtistRepository', ArtistRepository
)

container.registerSingleton<IAnnotationRepository>(
  'AnnotationRepository', AnnotationRepository
)