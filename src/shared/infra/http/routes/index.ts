import { Router } from 'express';
import { AnnotationRoutes } from './annotation.routes';
import { ArtistRoutes } from './artist.routes';
import { authenticateRoutes } from './authenticate.routes';
import { MusicRoutes } from './musics.routes';
import { usersRoutes } from './users.routes';

export const router = Router();

router.use(authenticateRoutes);
router.use("/users", usersRoutes)

router.use('/musics', MusicRoutes);
router.use('/artists', ArtistRoutes);
router.use('/annotations', AnnotationRoutes);
