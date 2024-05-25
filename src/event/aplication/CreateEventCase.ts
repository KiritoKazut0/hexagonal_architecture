import CreateEventRequest from "../domain/DTOS/CreateEventResponse";
import EventRepository from "../domain/EventRepository";

export default class CreateEventCase{

    constructor (readonly entryRepositori: EventRepository ){}

    async run (event: CreateEventRequest){
        const eventAdded = await this.entryRepositori.create(event);

        if(!eventAdded){
            return null
        }

        return eventAdded
    }
}
