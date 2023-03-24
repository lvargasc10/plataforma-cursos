
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {

  titulo:string='Formulario Empresa';
  empresa:Empresa = new Empresa();
  error:any;
  constructor(private service:EmpresaService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editar();
  }

  crear(){
    this.service.crear(this.empresa).subscribe(empresa =>{
      Swal.fire('Crear Empresa',`Empresa ${empresa.nombreEmpresa} fue creado con exito`,'success');
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
        this.service.ver(id).subscribe((empresa) => this.empresa=empresa);
      }
    })
  }

  modificar(){
    this.service.modificar(this.empresa).subscribe(empresa =>{
      Swal.fire('Modificado',`Empresa ${empresa.nombreEmpresa} modificado con exito`,`success`)
      this.router.navigate(['/empleados']);
    }, err =>{
      if(err.status === 400){
        this.error = err.error;
      }
    })
  }
}
