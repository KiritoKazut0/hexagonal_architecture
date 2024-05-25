import { Request, Response } from "express";
import CreatePublicationCase from "../../aplication/CreatePublicationCase";
import CreatePublicationRequest from "../../domain/DTOS/PublicationRequest";

export default class CreateControllerPublication {
    constructor (readonly createPublication: CreatePublicationCase) {}

    async run (req: Request, res: Response){
        const {contenido, id_usuario, media} = req.body;

        const publication: CreatePublicationRequest = {
            id_usuario,
            contenido,
            media
        };

        const result = await this.createPublication.run(publication);

        if (!result){
            return res.status(500).json({
                data: result,
                msg: "error al crear una publicacion"
            });
        }

        return res.status(201).json({
            data: result,
            msg: "Publicacion creada"
        })

    }
}