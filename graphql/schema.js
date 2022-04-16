import { getById, Peopels } from "./db";

export const person = {
  typeDefs: `
  type Person {
      id:Int!
      name: String!
      age:Int!
      gender:String!
  }
  type Query{
      people: [Person]!
      person(id:Int!):Person
  }
  `,
  resolvers: {
    Query: {
      people: () => Peopels,
      person: (_, { id }) => getById(id),
    },
  },
};
