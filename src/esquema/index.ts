import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import { SALUDO } from './Queries/Saludo'
import { CONSULTA } from './Queries/Consulta'
import { USER_REGISTRO } from './Mutations/registros'

const rooteQuery = new GraphQLObjectType({

    name : 'rooteQuery',
    fields: {

        saludo: SALUDO,
        consulta: CONSULTA

    }

}) 

const mutation = new GraphQLObjectType({

    name: "mutation",
    fields: {

        realizarRegistro: USER_REGISTRO

    }

})

export const schema = new GraphQLSchema({

    query : rooteQuery,
    mutation : mutation

})

/*

mutation{
  
	realizarRegistro(
    LastName: "MENDEZ", 
    Name: "MARIA", 
    isMilitar: false,
  	isTemporal: false)
  
}

*/