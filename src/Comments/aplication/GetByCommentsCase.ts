import CommentsRepository from "../domain/CommnetsRepository";
import CommentsRespose from "../domain/DTOS/CommentsResponse";

export default class getByCommentsCase {
    constructor(readonly repository: CommentsRepository) { }

    async run(id_publicacion: string, id_usuario: string): Promise<CommentsRespose | null> {
        try {
            const result = await this.repository.getById(id_publicacion, id_usuario);

            if (result === null) return result;

            const response: CommentsRespose = {
                id_publicacion: result.id_publicacion,
                id_usuario: result.id_usuario,
                post: result.post
            }

            return response
        } catch (error) {
            console.error("error fetching comments", error);
            return null;
        }
    }
}