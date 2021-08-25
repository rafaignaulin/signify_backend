import { CreateAnnotationController } from '../../../../modules/annotations/useCase/createAnnotation/CreateAnnotationController'
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListAllAnnotationsPerMusicController } from '@modules/annotations/useCase/listAllAnnotationsPerMusic/ListAllAnnotationsPerMusicController';


export const AnnotationRoutes = Router()

const createAnnotationController = new CreateAnnotationController();
const listAllAnnotationsPerMusicController = new ListAllAnnotationsPerMusicController();

AnnotationRoutes.post("/create",ensureAuthenticated, createAnnotationController.handle);

AnnotationRoutes.get("/search/:id",ensureAuthenticated, listAllAnnotationsPerMusicController.handle);