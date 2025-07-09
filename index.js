
import 'dotenv/config';
import app from './src/app.js';

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log('Servidor escuchando en el puerto', PORT);
});
