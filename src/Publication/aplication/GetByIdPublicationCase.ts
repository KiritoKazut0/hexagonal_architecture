import PublicationRepository from "../domain/PublicationRepository";
import PublicationResponse from "../domain/DTOS/PublicationResponse";

export default class getByIdPublicationCase {
    constructor(readonly repository: PublicationRepository){}

    async run (id: string){
        const result = await this.repository.getById(id);

        if (result === null) return result

        const response : PublicationResponse = {
           nombre: result.nombre,
            contenido: result.contenido,
            media: result.media

        }
        return response
    }

}
