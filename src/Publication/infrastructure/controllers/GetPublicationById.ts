import { Request, Response } from "express";
import getByIdPublicationCase from "../../aplication/GetByIdPublicationCase";

export default class GetByIdPublication{
    constructor (readonly useCase: getByIdPublicationCase) {}
    async run (req: Request, res: Response) {
        const result = await this.useCase.run(req.params.id)
        if (result === null){
            return res.status(404).json({
                msg: "Post not found"
            })
        }
        return res.status(200).json({
            msg: "Post found",
            data: result
        })
    }
}