import upload from "@config/upload";
import CreateMusicController from "@modules/musics/useCase/createMusic/CreateMusicController";
import ListArtistMusicsController from "@modules/musics/useCase/listArtistMusics/ListArtistMusicsController";
import SearchMusicController from "@modules/musics/useCase/searchMusic/SearchMusicController";
import { Router } from "express";
import multer from "multer";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


export const MusicRoutes  = Router()

const createMusicController = new CreateMusicController();
const listArtistMusicsController = new ListArtistMusicsController();
const searchMusicController = new SearchMusicController();
const uploadConfig = upload;

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar/artists"))

MusicRoutes.post("/create/:id",ensureAuthenticated, ensureAdmin,createMusicController.handle)

MusicRoutes.get("/search/:id",ensureAuthenticated, listArtistMusicsController.handle)

MusicRoutes.get("/search",ensureAuthenticated, searchMusicController.handle)
