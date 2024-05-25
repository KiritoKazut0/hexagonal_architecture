import query from "../../Database/Connection";
import { UserRequest, UserCreateRequest } from "../domain/DTOS/UserRequest";
import userEntry from "../domain/UserEntry";
import UserRepository from "../domain/UserRepository";

export default class MysqlUserRepository implements UserRepository {
    constructor() { }

    async create(user: UserCreateRequest): Promise<userEntry | null> {

        const sentence =
            "INSERT INTO Users (nombre, username, email, password, avatar, interests, carrera, estado, grupo, edad, rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        const params: (string | number | null)[] = [
            user.nombre,
            user.username,
            user.email,
            user.password,
            user.avatar ?? null,
            user.intereses.join(','),
            user.carrera,
            user.estado ?? null,
            user.grupo,
            user.edad,
            user.rol ?? null
        ];

        try {
            const [result]: any = await query(sentence, params);
            if (!result || result.length === 0) {
                console.log("Nose pudo completar con el resgistro de usuario");
                return null
            }

            const response: userEntry = {
                id: result.insertId.toString(),
                nombre: user.nombre,
                username: user.username,
                email: user.email,
                password: user.password,
                avatar: user.avatar || '',
                intereses: user.intereses,
                carrera: user.carrera,
                estado: user.estado || '',
                grupo: user.grupo,
                edad: user.edad,
                rol: user.rol || ''
            }

            return response

        } catch (error) {
            console.log("Ha ocurrido un error durante la consulta.");
            console.error(error);
            return null;
        }

    }

    async getById(id: string): Promise<userEntry | null> {
        const setence: string = "SELECT * FROM Users WHERE id = ?";
        const params = [id];

        try {
            const [entry]: any = await query(setence, params);

            if (entry === null || entry.length === 0) {
                return null
            }

            return entry[0];

        } catch (error) {
            console.log("Ha ocurrido un erro en la petición.");
            console.error(error);
            return null;
        }

    }

}