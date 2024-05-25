import { Router } from "express";
import {createPublicationController, getByIdPublications   } from "./dependencies";

const PublicationRouter = Router();

PublicationRouter.post('/',createPublicationController.run.bind(createPublicationController));
PublicationRouter.get('/:id',getByIdPublications.run.bind(getByIdPublications));

export default PublicationRouter