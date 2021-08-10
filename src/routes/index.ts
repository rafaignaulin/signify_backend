import { Router } from 'express';
import { AnnotationRoutes } from './annotation.routes';
import { ArtistRoutes } from './artist.routes';
import { MusicRoutes } from './musics.routes';


export const router = Router();


router.use("/musics", MusicRoutes);
router.use("/artists", ArtistRoutes)
router.use("/annotations", AnnotationRoutes)