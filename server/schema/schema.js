const 
	graphql = require('graphql'),
	{ GraphQLSchema } = graphql,
	RootQueryType = require('./types/root_query_type'),
	mutation = require('./mutations');

module.exports = new GraphQLSchema({
	query: RootQueryType,
	mutation
});
