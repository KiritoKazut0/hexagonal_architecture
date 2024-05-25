import { Request, Response } from "express";
import getByIdEventCase from "../../aplication/GetByIdEventCase";

export default class GetByIdEvent {
    constructor(readonly useCase: getByIdEventCase){}
    async run(req: Request, res: Response) {
        const result = await this.useCase.run(req.params.id)
        if (result === null){
            return res.status(404).json({
                msg: "Event not found"
            })
        }
        return res.status(200).json({
            msg: "Event found",
            data: result
        })
    }
}