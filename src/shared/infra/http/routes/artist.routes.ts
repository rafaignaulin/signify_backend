import { ListArtistsController } from '../../../../modules/artists/useCase/listArtists/ListArtistsController';
import { CreateArtistController } from '../../../../modules/artists/useCase/createArtist/CreateArtistController';
import { Router } from 'express';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import upload from '@config/upload';
import multer from 'multer';
import UpdateArtistAvatarController from '@modules/artists/useCase/updateArtistAvatar/UpdateArtistAvatarController';

export const ArtistRoutes = Router();

const createArtistController = new CreateArtistController();
const listArtistsController = new ListArtistsController();
const updateArtistAvatarController = new UpdateArtistAvatarController();

const uploadConfig = upload;

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar/artists"))

ArtistRoutes.post('/create', ensureAuthenticated, ensureAdmin, createArtistController.handle);
ArtistRoutes.patch('/avatar/:id', ensureAuthenticated, ensureAdmin, uploadAvatar.single("avatar"), updateArtistAvatarController.handle);
ArtistRoutes.get('/list', ensureAuthenticated, ensureAdmin, listArtistsController.handle);
