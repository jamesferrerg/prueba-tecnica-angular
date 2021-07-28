import { Autor } from './autor';
import { Editorial } from './editorial';

export class Libro {
    idLibro: number;
    titulo: string;
    fechaYear: number;
    genero: string;
    numeroPaginas: number;
    autores: Autor;
    editoriales: Editorial;
}
