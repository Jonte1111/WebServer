import express from 'express';
import path from'path';
import { fileURLToPath } from 'url';

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res)=> {
    const options = {
        root: path.join(__dirname, 'src')
    };
    res.sendFile('app.html', options);
});

app.listen(PORT, ()=> {
    console.log('Server listening on port ${PORT}');

});