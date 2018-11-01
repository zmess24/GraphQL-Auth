const 
	graphql = require('graphql'),
	{ GraphQLObjectType, GraphQLID } = graphql;

const RootQueryType = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
	// GraphQl expects every type loaded into our application has at least one field assigned to it.
      dummyField: { type: GraphQLID } 
    }
});

module.exports = RootQueryType;
