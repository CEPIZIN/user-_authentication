import app from './src/app.js';
import fs from 'fs';
import yaml from 'js-yaml';
import swaggerUi from 'swagger-ui-express';


const port = process.env.PORT || 3000;

//swagger documentation
const swaggerDocument = yaml.load(fs.readFileSync('./src/docs/swagger.yaml', 'utf8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
  console.log(`Server runnign on  http://localhost:${port}`);
});