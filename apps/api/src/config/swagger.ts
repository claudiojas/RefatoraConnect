import swaggerJSDoc, { SwaggerDefinition } from 'swagger-jsdoc';  
import YAML from 'js-yaml';
import fs from 'fs';
import path from 'path';

// Carrega o arquivo principal da documentação
const mainDocsPath = path.resolve(__dirname, '../../DOCS/swagger/api-docs.yaml');
const mainDocs = YAML.load(fs.readFileSync(mainDocsPath, 'utf8')) as SwaggerDefinition;  

// Carrega os schemas
const schemasPath = path.resolve(__dirname, '../../DOCS/swagger/schemas.yaml');
const schemas = YAML.load(fs.readFileSync(schemasPath, 'utf8'));

const options: swaggerJSDoc.Options = {
  definition: {
    ...mainDocs,
    components: {
      ...mainDocs.components,
      ...mainDocs.components,
    },
  },
  apis: ['./src/router/**/*.ts'], // Caminho para os arquivos que contêm as anotações JSDoc
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
