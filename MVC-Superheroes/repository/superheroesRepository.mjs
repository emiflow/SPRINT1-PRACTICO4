import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperheroesDataSource from './superheroesDataSource.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '../superheroes.txt');

export default class SuperheroesFileRepository extends SuperheroesDataSource {
    constructor() {
        super();
    }

    obtenerTodos() {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }
}
