import { Request, Response } from "express";
import CreateEventCase from "../../aplication/CreeateEventCase";
import CreateEventRequest from "../../domain/DTOS/EventRequest";

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
    }
}