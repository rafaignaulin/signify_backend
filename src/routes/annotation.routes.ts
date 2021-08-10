import { Router } from "express";
import CreateAnnotationController from "../modules/annotations/useCase/createAnnotation/CreateAnnotationController";


export const AnnotationRoutes = Router()

const createAnnotationController = new CreateAnnotationController();

AnnotationRoutes.post("/create", createAnnotationController.handle);