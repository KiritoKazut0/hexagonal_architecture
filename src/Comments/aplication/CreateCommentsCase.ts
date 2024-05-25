import { CommentsRequest } from "../domain/DTOS/CommentsCreateRequest";
import CommentsRepository from "../domain/CommnetsRepository";

export default class CreateCommentsCase {
    constructor (readonly entryRepository: CommentsRepository) {}

    async run (comments: CommentsRequest){
        const commentsAdded = await this.entryRepository.create(comments);
        
        if(!commentsAdded){
            return null
        }

        return commentsAdded
    }
}