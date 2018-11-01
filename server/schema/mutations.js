const
    graphql = require('graphql'),
    { GraphQLObjectType, GraphQLString } = graphql,
    UserType = require('./types/user_type'),
    AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            // Third arg 'req' represents request object coming from express.
            // Commonly referred to as 'context' in online GraphQL documentation
            resolve(parentValue, { email, password }, req) { 
                return AuthService.signup({ email, password, req });
            }
        },
        login: {
            type: UserType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            resolve(parentValue, { email, password }, req) {
                return AuthService.login({ email, password, req })
            }
        },
        logout: {
            type: UserType,
            resolve(parentValue, args, req) {
                return AuthService.logout(req);
            }
        }
    }
});

module.exports = mutation;

