import query from "../../Database/Connection";
import CreateEventResponse from "../domain/DTOS/CreateEventResponse";
import CreateEventEntry from "../domain/EventEntry";
import EventRepository from "../domain/EventRepository";

export default class MysqlEventRepository implements EventRepository {
   async create(event: CreateEventResponse): Promise<CreateEventEntry | null> {

      // id: string,
      //    id_usuario: string,
      //       nombre_evento: string,
      //          direccion: string,
      //             descripcion: string,
      //                fecha: string
      const sentence =
         "INSERT INTO Event (id_usuario, nombre_evento, direccion, descripcion, fecha) VALUES (?, ?, ?, ?, ?)";

      const params: (number | string)[] = [
         event.id_usuario,
         event.nombre_evento,
         event.direccion,
         event.descripcion,
         event.fecha
      ]

      try {

         const [result]: any = await query(sentence, params);
         if (!result || result.length === 0) {
            console.log("Nose pudo crear el evento");
            return null
         }

         const response: CreateEventResponse = {
            id_usuario: event.id_usuario,
            nombre_evento: event.nombre_evento,
            direccion: event.direccion,
            descripcion:event.descripcion,
            fecha: event.fecha
         }
         return response
      } catch (error) {

         console.log("Ha ocurrido un error durante la consulta.");
         console.error(error);
         return null;
      }

   }

   async getById(id_usuario: string): Promise<CreateEventEntry | null> {
      const sentence: string = 
      "SELECT e.id_usuario, e.nombre_evento, e.direccion, e.descripcion, e.fecha FROM Event WHERE e.id_usuario = ?";
      const params = [id_usuario];

      try {
         const [entry]: any = await query(sentence, params);

         if (entry === null || entry.length === 0) {
            return null
         }

         return entry[0];

      } catch (error) {

         console.log("Ha ocurrido un error en la petición.");
         console.error(error);
         return null;

      }

   }
}

