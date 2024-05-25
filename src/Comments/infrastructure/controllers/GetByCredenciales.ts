import { Request, Response } from "express";
import getByCommentsCase from "../../aplication/GetByCommentsCase";

export default class GetByIdController {
    constructor (readonly useCase: getByCommentsCase){}

    async run(req: Request, res: Response){
        const result = await this.useCase.run(req.params.id_publicacion, req.params.id_usuario)

        if (result === null){
            return res.status(404).json({
                msg: "Comentario not found"
            });
        }

        return res.status(200).json({
            msg: "Comentario found",
            data: result
        })
    }
}