import { createSchema } from 'sanity';
import { schemaTypes } from './schematypes';  // Import schemaTypes from index.ts

export default createSchema({
  name: 'default',
  types: schemaTypes,  // Register the schemas here
});