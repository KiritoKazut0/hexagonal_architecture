import { Request, Response } from "express";
import CreateEventCase from "../../aplication/CreateEventCase";
import CreateEventRequest from "../../domain/DTOS/CreateEventResponse";
export default class CreateControllerEvent{
    constructor (readonly createEvent: CreateEventCase) {}
    async run (req: Request, res: Response){
        const {id_usuario, nombre_evento, direccion, descripcion, fecha} = req.body;
        const newEvent: CreateEventRequest = {
            id_usuario, 
            nombre_evento, 
            direccion, 
            descripcion, 
            fecha
        }
        const result = await this.createEvent.run(newEvent)
        if (!result){
            return res.status(500).json({
                data: result,
                msg: "error al crear un evento"
            });
        }
        return res.status(201).json({
            data: result,
            msg: "Evento creado con éxito"
        })
    }
}