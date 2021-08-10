import { Router } from "express";
import CreateArtistController from "../modules/artists/useCase/createArtist/CreateArtistController";
import { ListArtistsController } from "../modules/artists/useCase/listArtists/ListArtistsController";

export const ArtistRoutes  = Router()

const createArtistController = new CreateArtistController();
const listArtistsController = new ListArtistsController();

ArtistRoutes.post("/create", createArtistController.handle);
ArtistRoutes.get("/list", listArtistsController.handle);
