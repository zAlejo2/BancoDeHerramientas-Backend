import 'dotenv/config';
import app from './src/app.js';

app.listen(app.get('port'), () => {
    console.log('Servidor escuchanado en el puerto', app.get('port'));
});