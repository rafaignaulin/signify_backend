import upload from "@config/upload";
import CreateMusicController from "@modules/musics/useCase/createMusic/CreateMusicController";
import DeleteMusicController from "@modules/musics/useCase/deleteMusic/DeleteMusicController";
import ListArtistMusicsController from "@modules/musics/useCase/listArtistMusics/ListArtistMusicsController";
import ListMusicController from "@modules/musics/useCase/listMusic/ListMusicController";
import SearchMusicController from "@modules/musics/useCase/searchMusic/SearchMusicController";
import UpdateMusicAvatarController from "@modules/musics/useCase/updateMusicAvatar/UpdateMusicAvatarController";
import { Router } from "express";
import multer from "multer";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


export const MusicRoutes  = Router()

const createMusicController = new CreateMusicController();

const deleteMusicController = new DeleteMusicController();

const updateMusicAvatarUseCase = new UpdateMusicAvatarController();

const listArtistMusicsController = new ListArtistMusicsController();

const searchMusicController = new SearchMusicController();

const listMusicController = new ListMusicController();

const uploadConfig = upload;

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar/musics"))
MusicRoutes.post("/create/:id",ensureAuthenticated, ensureAdmin,uploadAvatar.single("avatar"),  createMusicController.handle)

MusicRoutes.post("/delete/:id",ensureAuthenticated, ensureAdmin, deleteMusicController.handle)

MusicRoutes.patch('/avatar/:id', ensureAuthenticated, ensureAdmin, uploadAvatar.single("avatar"), updateMusicAvatarUseCase.handle);

MusicRoutes.get("/artist/:id",ensureAuthenticated, listArtistMusicsController.handle)

MusicRoutes.get("/search/",ensureAuthenticated, searchMusicController.handle)
MusicRoutes.get("/search/:id",ensureAuthenticated, searchMusicController.handle)

MusicRoutes.get("/",ensureAuthenticated, listMusicController.handle)
