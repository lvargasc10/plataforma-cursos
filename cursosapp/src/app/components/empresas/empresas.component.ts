import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-empresa',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  titulo:string ='Listado Empleados';
  lista:Empresa[]=[];
 
  empresas:Empresa = new Empresa();
  totalRegistros=0;
  totalPorPagina=5;
  paginaActual=0;
  pageSizeOptions: number[] = [5,10,25,100];
  constructor(private service:EmpresaService) { }

  ngOnInit(): void {
    //this.service.listar().subscribe(list => this.lista = list);
    this.calcularRangos();
  }


  editar(nombreEmpresa: string):void{    
    this.empresas.nombreEmpresa=nombreEmpresa;    
    
  }

  private calcularRangos(){
    this.service.listarPagina(this.paginaActual.toString(),
    this.totalPorPagina.toString()).subscribe(p => {
      this.lista= p.content as Empresa[];
      this.totalRegistros = p.totalElements as number;
    });
  }

  paginar(event: PageEvent):void{
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularRangos();
  }
  eliminar(empresa:Empresa):void{    
    Swal.fire({
      title: 'Esta seguro?',
      text: `Seguro de eliminar a ${empresa.nombreEmpresa} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(empresa.id).subscribe(() =>{
          //this.lista = this.lista.filter(c => c !==empresas); 
          this.calcularRangos();
          Swal.fire('Eliminar Empresas',`Empresas ${empresa.nombreEmpresa} eliminado con exito`,'success'); 
        })
      }
    })
  }

  modificar(empresa:Empresa):void{   
   
        this.service.modificar(empresa).subscribe(() =>{
          //this.lista = this.lista.filter(c => c !==empresas);          
          
        })
      }  
  
}
