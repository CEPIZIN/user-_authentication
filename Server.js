import app from './src/app.js';
import fs from 'fs';
import yaml from 'js-yaml';

const port = process.env.PORT || 3000;

const swaggerDocument = yaml.load(fs.readFileSync('./src/docs/swagger.yaml', 'utf8'));

app.listen(port, () => {
  console.log(`Server runnign on  http://localhost:${port}`);
});