import { Usuario } from './usuario';
import { MedicionGeneral } from './medicion-general';
import { MedicionEspecifica } from './medicion-especifica';
import { Cita } from './cita';
import { MedicionSegmental } from './medicion-segmental';
import { PlanDieta } from './plan-dieta';
import { AntecedenteClinicos } from './antecedente-clinicos';
import { AntecedenteTratamiento } from './antecedente-tratamiento';
export class Paciente extends Usuario {
nombre: string;
apellidos: string;
fechanacimiento: Date;
direccion: string;
localidad: string;
codigopostal: string;
provincia: string;
dni: string;
altura: number;
telefono: string;
sexo: string ;
medicionesgenerales: MedicionGeneral[] = [];
medicionesespecificas: MedicionEspecifica[] = [];
medicionessegmentales: MedicionSegmental[] = [];
citas: Cita[]=[];
planesdieta: PlanDieta [] = [];
antecedentesclinicos: AntecedenteClinicos [] = [];
antecedentesdetratamiento: AntecedenteTratamiento [] = [];
}
