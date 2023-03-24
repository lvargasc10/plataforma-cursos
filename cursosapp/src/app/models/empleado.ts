import { Empresa } from "./empresa";


export class Empleado {

    id:number=0;
    identificacion:string="";
    nombreEmpleado:string="";
    fechaNacimiento:Date= new Date('yyyy-MM-dd');
    correo:string="";
    telefono:string="";
    empresa:Empresa=new Empresa();
}
