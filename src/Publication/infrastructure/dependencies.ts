import CreatePublicationCase from "../aplication/CreatePublicationCase";
import GetByIdPublicationCase from "../aplication/GetByIdPublicationCase";
import MysqlPublicationRepository from "./MysqlPublicationsRepository";
import CreateControllerPublication from "./controllers/CreateControllers";
import GetByIdPublications from "./controllers/GetByIdControllers";
import GetByIdPublication from "./controllers/GetPublicationById";


export const  mysqlPublicationRepository = new  MysqlPublicationRepository();
export const createPublicationCase = new CreatePublicationCase(mysqlPublicationRepository);
export const getByIdPublicationCase = new GetByIdPublicationCase(mysqlPublicationRepository);
export const createPublicationController = new CreateControllerPublication(createPublicationCase);
export const getByIdPublicationController = new GetByIdPublication(getByIdPublicationCase);
export const getByIdPublications  = new GetByIdPublications(getByIdPublicationCase);