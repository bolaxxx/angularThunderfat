import { PlatoPlanDieta } from './plato-plan-dieta';
export class Comida {
id: number;
fecha: Date;
hora: Date;
valoracion: number;
platos: PlatoPlanDieta[] = [];
}
