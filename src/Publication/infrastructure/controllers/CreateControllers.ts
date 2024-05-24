import { Request, Response } from "express";
import CreatePublicationCase from "../../aplication/CreatePublicationCase";
import CreatePublicationRequest from "../../domain/DTOS/PublicationRequest";

export default class CreateControllerPublication {
    constructor (readonly createPublication: CreatePublicationCase) {}

    async run (req: Request, res: Response){
        const {contenido, id_usuario} = req.body;

        const publication: CreatePublicationRequest = {
            id_usuario,
            contenido
        };

        const result = await this.createPublication.run(publication)

    }

}