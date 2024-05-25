import { Router } from "express";
import {createEventCase, getByIdEventCase   } from "./dependencies";

const EventRouter = Router();

EventRouter.post('/',createEventCase.run.bind(createEventCase));
EventRouter.get('/:id',getByIdEventCase.run.bind(getByIdEventCase));

export default EventRouter