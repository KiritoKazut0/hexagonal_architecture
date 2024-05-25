import CreateCommentsCase from "../aplication/CreateCommentsCase";
import getByCommentsCase from "../aplication/GetByCommentsCase";
import MysqlCommentsRepository from "./MysqlCommentsRepository";
import CreateControllerComments from "./controllers/CreateControllers";
import GetByIdController from "./controllers/GetByCredenciales";

export const mysqlCommentsRepository = new MysqlCommentsRepository();

export const createCommentsCase = new CreateCommentsCase(mysqlCommentsRepository);
export const getByIdComments = new getByCommentsCase(mysqlCommentsRepository);

export const createCommentsController = new CreateControllerComments(createCommentsCase);
export const ByIdCommentsController = new GetByIdController(getByIdComments);