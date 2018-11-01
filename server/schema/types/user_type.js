const 
    graphql = require('graphql'),
    { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        email: { type: GraphQLString }
    }
});

module.exports = UserType;