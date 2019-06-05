import { Comida } from './comida';
import { FiltroAlimentario } from './filtro-alimentario';
export class PlanDieta {
id: number;
fechaini: Date;
fechafin: Date;
calrangomin: number;
calrangomax: number;
ingestacaldiaria: number;
repartoglucidodiario: number;
repartolipidodiario: number;
repartoprotidodiario: number	;
comidasdiarias: number;
comidas: Comida[] = [];
filtrosaplicados: FiltroAlimentario;
}
