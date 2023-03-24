import { PageEvent } from '@angular/material/paginator';
import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  titulo:string = 'Listado de cursos';
  lista: Curso[]=[]; 
  curso:Curso = new Curso();

  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOptions: number[] = [5,10,25,100];
  static curso: Curso[];
  static lista: Curso[];
  constructor(private service:CursoService) { }

  ngOnInit(): void { 
    this.calcularRangos();
  }

  private calcularRangos(){
    this.service.listarPagina(this.paginaActual.toString(),
    this.totalPorPagina.toString()).subscribe(p => {
      this.lista= p.content as Curso[];
      this.totalRegistros = p.totalElements as number;
    });
  }

  paginar(event: PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularRangos();
  }

  eliminar(curso:Curso):void{    
    Swal.fire({
      title: 'Esta seguro?',
      text: `Seguro de eliminar el curso?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(curso.id).subscribe(() =>{
          //this.lista = this.lista.filter(c => c !==empleado); 
          this.calcularRangos();
          Swal.fire('Eliminar Curso',`Curso eliminado con exito`,'success'); 
        })
      }
    })

  }

  modificar(curso:Curso):void{   
   
    this.service.modificar(curso).subscribe(() =>{
      //this.lista = this.lista.filter(c => c !==empleado);          
      
    })
  }  
}
