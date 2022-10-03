import { GraphQLList } from "graphql";
import { registro_users } from "../../entities/appRegistro";
import { userType } from "../typedefs/User";

export const CONSULTA = {

    type: new GraphQLList(userType),
    async resolve()
    {

        const result = await registro_users.find()

        console.log("USUARIOS REGISTRADOS", result)

        return result

    }

}