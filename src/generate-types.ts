import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { config } from 'dotenv';
config();

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: [process.env.SCHEMA_PATH,],
  path: process.env.TYPES_PATH,
});
