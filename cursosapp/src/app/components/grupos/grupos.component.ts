import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosGrupo } from 'src/app/models/empleados-grupo';
import { Grupo } from 'src/app/models/grupo';
import { GrupoService } from 'src/app/services/grupo.service';
import Swal from 'sweetalert2';
import { CursosComponent } from '../cursos/cursos.component';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})

export class GruposComponent implements OnInit {
  lista:Grupo[]=[];
  grupo:Grupo= new Grupo();
  error: any;
  router: any;

  constructor(private service: GrupoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((lista: Grupo[])=>this.lista=lista);
  }
  getEmpleados(grupo:Grupo){
    this.grupo=grupo;
  }

  editar(id: number):void{    
    this.grupo.curso.id=id;    
    
  }

  agregarEmpleadoGrupo(empleado:Empleado,nota:number,fallas:number){

    var empleadosgrupo:EmpleadosGrupo=new EmpleadosGrupo;
    empleadosgrupo.empleado=empleado;
    empleadosgrupo.notaFinal=nota;
    empleadosgrupo.fallas=fallas; 

    this.service.agregarEmpleadoGrupo(empleadosgrupo).subscribe(data=>{
      alert("Se ha creado con exito");
    })    
  }  

  modificar(grupo:Grupo):void{      
    this.service.modificar(grupo).subscribe(() =>{         
    })
  }
  
  certificado(empleadosgrupo:EmpleadosGrupo){
    if ( empleadosgrupo.notaFinal > 3.0){
      Swal.fire('Certificado',`El empleado ${empleadosgrupo.empleado.nombreEmpleado} ha aprobado con exito`,`success`)
      this.router.navigate(['/grupos']);
      (err: { status: number; error: any; }) =>{
        if(err.status === 400){
          this.error = err.error;
        }
      }
    }  

if ( empleadosgrupo.notaFinal < 3.0){
  Swal.fire('Certificado',`El empleado ${empleadosgrupo.empleado.nombreEmpleado} ha reprobado`,`error`)
  this.router.navigate(['/grupos']);
  (err: { status: number; error: any; }) =>{
    if(err.status === 400){
      this.error = err.error;
    }
  }
}     
}  
}
