import { Curso } from "./curso";
import { EmpleadosGrupo } from "./empleados-grupo";

export class Grupo {

    id:number=0;
    createAt:Date= new Date();    
    empleados:EmpleadosGrupo[]=[];
    curso:Curso= new Curso();
    grupo:number=0;
    hora:string="";
    salon:string="";


}
