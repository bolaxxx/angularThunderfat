import { Ingrediente } from './ingrediente';
export class Plato {
id: number;
nombre: string;
ingredientes: Ingrediente [] = [];
receta: string;
kcaltotales: number;
proteinastotales: number;
grasastotales: number;
hidratostotales: number;
}
