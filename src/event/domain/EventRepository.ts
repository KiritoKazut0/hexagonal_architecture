import CreateEventRequest from "./DTOS/EventRequest"
import EventEntry from "./EventEntry"


export default interface EventRepository{
    create(event: CreateEventRequest) : Promise <EventEntry | null>
    getById (id: string): Promise <EventEntry | null>

}
