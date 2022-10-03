import {GraphQLBoolean, GraphQLString} from 'graphql'
import { registro_users } from '../../entities/appRegistro'
import { userType } from '../typedefs/User'

export const USER_REGISTRO = {

    type: userType,
    args:{

        LastName: { type: GraphQLString },
        Name: { type: GraphQLString},
        isMilitar: {type: GraphQLBoolean},
        isTemporal: {type: GraphQLBoolean}

    },

    async resolve(_: any, args: any)
    {

        const { LastName, Name, isMilitar, isTemporal} = args

        const result = await registro_users.insert({

            LastName: LastName,
            Name: Name,
            isMilitar: isMilitar,
            isTemporal: isTemporal

        })

        console.log("LO QUE ENTRA POR ARGS: ", args)
        console.log("DATOS DEL RESULT: ", result)
        return {...args, id: result.identifiers[0].id}
    
    }

}