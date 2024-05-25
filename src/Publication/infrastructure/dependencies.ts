import CreatePublicationCase from "../aplication/CreatePublicationCase";
import GetByIdPublicationCase from "../aplication/GetByIdPublicationCase";
import MysqlPublicationRepository from "./MysqlPublicationsRepository";
import CreateControllerPublication from "./controllers/CreateControllers";
import GetByIdPublications from "./controllers/GetByIdControllers";



export const  mysqlPublicationRepository = new  MysqlPublicationRepository();
export const createPublicationCase = new CreatePublicationCase(mysqlPublicationRepository);
export const getByIdPublicationCase = new GetByIdPublicationCase(mysqlPublicationRepository);
export const createPublicationController = new CreateControllerPublication(createPublicationCase);
export const getByIdPublications  = new GetByIdPublications(getByIdPublicationCase);