import { Request, Response } from "express";
import CreateCommentsCase from "../../aplication/CreateCommentsCase";
import { CommentsRequest } from "../../domain/DTOS/CommentsCreateRequest";

export default class CreateControllerComments {
    constructor (readonly createCommentsCase: CreateCommentsCase){}

    async run (req: Request, res:Response){
        const {id_publicacion, id_usuario, post} = req.body;

        const comments: CommentsRequest = {
            id_publicacion,
            id_usuario,
            post
        };

        const result = await this.createCommentsCase.run(comments);

        if (!result){
            return res.status(500).json({
                data: result,
                msg: "error al crear el comentario"
            });
        }

        return res.status(201).json({
            data: result,
            msg: "Comentario creado con exito"
        });
    }
}