import { Router } from "express";
import { createCommentsController, ByIdCommentsController } from "./dependencies";
import '../../Database/Connection'

const commentsRouter = Router();

commentsRouter.post('/', createCommentsController.run.bind(createCommentsController));
commentsRouter.get('/:id_publicacion/:id_usuario', ByIdCommentsController.run.bind(ByIdCommentsController));

export default commentsRouter