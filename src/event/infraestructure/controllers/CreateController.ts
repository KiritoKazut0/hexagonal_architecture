import { Request, Response } from "express";
import CreateEventCase from "../../aplication/CreeateEventCase";
import CreateEventRequest from "../../domain/DTOS/EventRequest";

export default class CreateControllerEvent{
    constructor (readonly createEvent: CreateEventCase) {}

    async run (req: Request, res: Response){
        const {} = req.body;

    }
}