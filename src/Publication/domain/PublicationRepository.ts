import CreatePublicationRequest from "./DTOS/PublicationRequest";
import PublicationEntry from "./PublicationEntry";

export default interface PublicationRepository {
    create(publication: CreatePublicationRequest) : Promise <PublicationEntry | null>
    getByIdPublicationForUser (id: string): Promise <PublicationEntry | null>
    getAll (): Promise <Array<PublicationEntry> | null>

   

}   

