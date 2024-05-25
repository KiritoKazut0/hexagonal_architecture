import { CommentsRequest } from "./DTOS/CommentsCreateRequest"
import commentsEntry from "./CommentsEntry"

export default interface CommentsRepository {
    create(post: CommentsRequest) : Promise <commentsEntry | null>;
    getById(id_publicacion: string, id_usuario: string): Promise <commentsEntry | null>;
    
}