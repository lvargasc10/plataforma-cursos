import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  titulo:string ='Listado Empleados';
  lista:Empleado[]=[];
 
  empleado:Empleado = new Empleado();
  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOptions: number[] = [5,10,25,100];
  constructor(private service:EmpleadoService) { }

  ngOnInit(): void {
    //this.service.listar().subscribe(list => this.lista = list);
    this.calcularRangos();
  }


  editar(nombreEmpleado: string):void{    
    this.empleado.nombreEmpleado=nombreEmpleado;    
    
  }

  private calcularRangos(){
    this.service.listarPagina(this.paginaActual.toString(),
    this.totalPorPagina.toString()).subscribe(p => {
      this.lista= p.content as Empleado[];
      this.totalRegistros = p.totalElements as number;
    });
  }

  paginar(event: PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularRangos();
  }
  eliminar(empleado:Empleado):void{    
    Swal.fire({
      title: 'Esta seguro?',
      text: `Seguro de eliminar a ${empleado.nombreEmpleado} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(empleado.id).subscribe(() =>{
          //this.lista = this.lista.filter(c => c !==empleado); 
          this.calcularRangos();
          Swal.fire('Eliminar Empleado',`Empleado ${empleado.nombreEmpleado} eliminado con exito`,'success'); 
        })
      }
    })
  }

  modificar(empleado:Empleado):void{   
   
        this.service.modificar(empleado).subscribe(() =>{
          //this.lista = this.lista.filter(c => c !==empleado);          
          
        })
      }  
  
}
