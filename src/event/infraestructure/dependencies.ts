import CreateEventCase from "../aplication/CreateEventCase";
import GetByIdEventCase from "../aplication/GetByIdEventCase";
import MysqlEventRepository from "./MysqlEventRepository";

export const mysqlEventRepository = new MysqlEventRepository();
export const  createEventCase = new  CreateEventCase(mysqlEventRepository);
export const getByIdEventCase = new GetByIdEventCase(mysqlEventRepository);