import { CreateAnnotationController } from '../../../../modules/annotations/useCase/createAnnotation/CreateAnnotationController'
import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListAllAnnotationsPerMusicController } from '@modules/annotations/useCase/listAllAnnotationsPerMusic/ListAllAnnotationsPerMusicController';
import { DeleteAnnotationController } from '@modules/annotations/useCase/deleteAnnotation/DeleteAnnotationController';


export const AnnotationRoutes = Router()

const createAnnotationController = new CreateAnnotationController();
const listAllAnnotationsPerMusicController = new ListAllAnnotationsPerMusicController();
const deleteAnnotationController = new DeleteAnnotationController();

AnnotationRoutes.post("/create",ensureAuthenticated, createAnnotationController.handle);

AnnotationRoutes.get("/search/:id",ensureAuthenticated, listAllAnnotationsPerMusicController.handle);

AnnotationRoutes.delete("/delete",ensureAuthenticated, deleteAnnotationController.handle);