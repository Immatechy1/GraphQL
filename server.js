const { buildSchema, graphql } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
   name: String
   email: String
  }
`);

// The rootValue provides a resolver function for each API endpoint
const rootValue = {
  name: () => {
    return 'Nwokejeme Immaculeta';
  },
  email: () => {
    return 'immaculeta@gmail.com';
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source: '{ name, email}',
  rootValue
}).then((res) => {
  console.log(res);
});