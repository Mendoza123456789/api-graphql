import {GraphQLString} from 'graphql'

export const SALUDO = {

    type: GraphQLString,
    resolve: () => 'HOLA, QUÉ TAL? ESPERO QUE ESTÉS MUY BIEN.'

}