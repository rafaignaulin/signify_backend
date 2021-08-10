import { Router } from "express";
import CreateMusicController from "../modules/musics/useCase/createMusic/CreateMusicController";
import ListArtistMusicsController from "../modules/musics/useCase/listArtistMusics/ListArtistMusicsController";


export const MusicRoutes  = Router()

const createMusicController = new CreateMusicController();

MusicRoutes.post("/create", createMusicController.handle)

const listArtistMusicsController = new ListArtistMusicsController();

MusicRoutes.get("/:artist_id", listArtistMusicsController.handle)
