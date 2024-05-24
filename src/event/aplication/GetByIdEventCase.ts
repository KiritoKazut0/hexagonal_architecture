import EventRepository from "../domain/EventRepository";
import EventResponse from "../domain/DTOS/EventResponse";

export default class getByIdEventCase {
    constructor(readonly repository: EventRepository){}

    async run (id: string){
        const result = await this.repository.getById(id);

        if (result === null) return result

        const reponse : EventResponse ={
            nombre: result.nombre_evento,
            contenido: result.nombre_evento
        }
        
        return reponse
    }
}