import query from "../../Database/Connection";
import { CommentsRequest } from "../domain/DTOS/CommentsCreateRequest";
import commentsEntry from "../domain/CommentsEntry";
import CommentsRepository from "../domain/CommnetsRepository";

export default class MysqlCommentsRepository implements CommentsRepository {
    constructor() {}

    async create(comments: CommentsRequest): Promise<commentsEntry | null> {
     const sentence = 
        "INSERT INTO Reaction (id_usuario, id_publicacion, post) VALUES  (?, ?, ?)";

        const params: (string | number)[] = [
            comments.id_publicacion,
            comments.id_usuario,
            comments.post
        ];

        try {
            const [result]: any = await query(sentence,params);
            if(!result || result.length ===0) {
                return null
            }

            const response: commentsEntry = {
                id_publicacion: comments.id_publicacion,
                id_usuario: comments.id_usuario,
                post: comments.post
            }

            return response

        } catch (error) {
            console.log("ha ocurrido un error durante la consulta");
            console.error(error);
            return null
        }
    }

    async getById(id_publicacion: string, id_usuario: string): Promise<commentsEntry | null> {
        const sentence:string = "SELECT * FROM Reaction WHERE id_publicacion = ? AND id_usuario = ?";
        const params = [id_publicacion, id_usuario];

        try {
            const [entry]: any = await query(sentence, params);
            console.log(entry);
            if (entry == null || entry.length ===0){
                return null
            }
            
            return entry[0];
        } catch (error) {
            console.log("Ha ocurrido un error en la peticion");
            console.log(error);
            return null;
        }
    }
};