import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  titulo:string ='Listado Usuarios';
  lista:Usuario[]=[];
 
  usuario:Usuario = new Usuario();
  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOptions: number[] = [5,10,25,100];
  constructor(private service:UsuarioService) { }

  ngOnInit(): void {

    this.calcularRangos();
  }


  editar(identificacion: string):void{    
    this.usuario.identificacion=identificacion;    
    
  }

  private calcularRangos(){
    this.service.listarPagina(this.paginaActual.toString(),
    this.totalPorPagina.toString()).subscribe(p => {
      this.lista= p.content as Usuario[];
      this.totalRegistros = p.totalElements as number;
    });
  }

  paginar(event: PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularRangos();
  }
  eliminar(usuario:Usuario):void{    
    Swal.fire({
      title: 'Esta seguro?',
      text: `Seguro de eliminar a ${usuario.identificacion} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(usuario.id).subscribe(() =>{
      
          this.calcularRangos();
          Swal.fire('Eliminar Usuario',`Usuario ${usuario.identificacion} eliminado con exito`,'success'); 
        })
      }
    })
  }

  modificar(usuario:Usuario):void{   
   
        this.service.modificar(usuario).subscribe(() =>{
              
          
        })
      }  
  
}