import app from './src/app.js';


const port = process.env.PORT || 3000;

const swaggerDocument = yaml.load(fs.readFileSync('./src/docs/swagger.yaml', 'utf8'));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

 


app.listen(port, () => {
  console.log(`Server runnign on  http://localhost:${port}`);
});