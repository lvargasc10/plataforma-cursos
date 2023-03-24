
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-form',
  templateUrl: './empleado-form.component.html',
  styleUrls: ['./empleado-form.component.css']
})
export class EmpleadoFormComponent implements OnInit {

  titulo:string='Formulario Empleado';
  empleado:Empleado = new Empleado();
  error:any;
  constructor(private service:EmpleadoService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editar();
  }

  crear(){
    this.service.crear(this.empleado).subscribe(empleado =>{
      Swal.fire('Crear Empleado',`Empleado ${empleado.nombreEmpleado} fue creado con exito`,'success');
      this.router.navigate(['/empleados']);
    }, err =>{
      if(err.status === 400){
        this.error = err.error;
      }
    })
  }

  editar():void{
    this.route.params.subscribe(params =>{
      let id = params['id'];
      if(id){
        this.service.ver(id).subscribe((empleado) => this.empleado=empleado);
      }
    })
  }

  modificar(){
    this.service.modificar(this.empleado).subscribe(empleado =>{
      Swal.fire('Modificado',`Empleado ${empleado.nombreEmpleado} modificado con exito`,`success`)
      this.router.navigate(['/empleados']);
    }, err =>{
      if(err.status === 400){
        this.error = err.error;
      }
    })
  }
}
