const 
	graphql = require('graphql'),
	{ GraphQLObjectType, GraphQLID } = graphql,
	UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
	// GraphQl expects every type loaded into our application has at least one field assigned to it.
      user: {
		type: UserType,
		resolve(parentValue, args, req) {
			return req.user;
		}
	  }
    }
});

module.exports = RootQueryType;
