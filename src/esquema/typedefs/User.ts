import { GraphQLBoolean, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const userType = new GraphQLObjectType ({

    name: "User",
    fields: {

        id: { type: GraphQLID },
        LastName: { type: GraphQLString },
        Name: { type: GraphQLString },
        isMilitar: { type: GraphQLBoolean },
        isTemporal: { type: GraphQLBoolean }

    }

})