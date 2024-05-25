import query from "../../Database/Connection";
import CreatePublicationRequest from "../domain/DTOS/PublicationRequest";
import PublicationEntry from "../domain/PublicationEntry";
import PublicationRepository from "../domain/PublicationRepository";

export default class MysqlPublicationRepository implements PublicationRepository {
   async create(publication: CreatePublicationRequest): Promise<PublicationEntry | null> {

      const sentence =
         "INSERT INTO Publicacion (id_usuario, contenido, media) VALUES (?, ?, ?)";

      const params: (number | string)[] = [
         publication.contenido,
         publication.id_usuario,
         publication.media
      ]

      try {

         const [result]: any = await query(sentence, params);
         if (!result || result.length === 0) {
            console.log("Nose pudo crear la publicacion");
            return null
         }

         const response: PublicationEntry = {
            idUser: publication.id_usuario,
            contenido: publication.contenido,
            media: publication.media,
            idPublication: result.insertId.toString(),

         }
         return response
      } catch (error) {

         console.log("Ha ocurrido un error durante la consulta.");
         console.error(error);
         return null;
      }

   }

   async getByIdPublicationForUser(id: string): Promise<PublicationEntry | null> {
      const sentence: string = "SELECT u.nombre, p.id, p.contenido, p.media FROM User u JOIN Publicacion p ON u.id = p.id_usuario WHERE u.id = ?";
      const params = [id];

      try {
         const [entry]: any = await query(sentence, params);

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

   async getAll(): Promise<PublicationEntry[] | null> {
      const sentence:string =
          "SELECT u.nombre, p.id, p.contenido, p.media FROM User u JOIN Publicacion p ON u.id = p.id_usuario";
          try {
            const [result]:any = await query(sentence, []);

               if (result === null){
                  return null;
               } 

               let response: Array<PublicationEntry> = []
              

               result.map((entry: any) => {
                  response.push({
                     idUser: entry.idUser,
                     idPublication: entry.idPublication,
                     contenido: entry.contenido,
                     media: entry.media
                  });
                });

                return response;

          } catch (error) {
            console.log("error al obtener los datos", error);
            return null
          }

   }

}

