import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grupo } from 'src/app/models/grupo';
import { Curso } from 'src/app/models/curso';
import { GrupoService } from 'src/app/services/grupo.service';
import Swal from 'sweetalert2';
import { EmpleadosGrupo } from 'src/app/models/empleados-grupo';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoFormComponent } from '../empleados/empleado-form.component';

@Component({
  selector: 'app-grupo-form',
  templateUrl: './grupo-form.component.html',
  styleUrls: ['./grupo-form.component.css']
})
export class GrupoFormComponent implements OnInit {

  titulo:string = 'Formulario grupo';
  grupo:Grupo = new Grupo;
  grupos:Grupo[]=[]; 
  empleados:EmpleadosGrupo[]=[]; 
  curso:Curso= new Curso();  
  empleadosgrupo:EmpleadosGrupo=new EmpleadosGrupo();    
  error:any;
  constructor(private service:GrupoService, private router:Router,private route:ActivatedRoute) { }

  setGrupo(grupo:Grupo){
    this.grupo=grupo;
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

  ngOnInit(): void {    
    this.editar();
  }
 
  crear(){
    this.service.crear(this.grupo).subscribe(grupo =>{
      Swal.fire('Crear Grupo',`Grupo ${grupo.curso.nombreCurso} fue creado con exito`,'success');
      this.router.navigate(['/grupos']);
    }, (err: { status: number; error: any; }) =>{
      if(err.status === 400){
        this.error = err.error;
      }
    })
  }

  editar():void{
    this.route.params.subscribe(params =>{
      let id = params['id'];      
      if(id){
        this.service.ver(id).subscribe((grupo) => this.grupo=grupo);
      }
    })
  }

  modificar(){
    this.service.modificar(this.grupo).subscribe(grupo =>{
      Swal.fire('Modificado',`Grupo ${grupo.curso.nombreCurso} modificado con exito`,`success`)
      this.router.navigate(['/grupos']);
    }, (err: { status: number; error: any; }) =>{
      if(err.status === 400){
        this.error = err.error;
      }
    })
  }
}
