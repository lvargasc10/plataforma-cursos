import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  titulo:string = 'Formulario curso';
  curso:Curso = new Curso;

  error:any;

  constructor(private service:CursoService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {    
    this.editar();
  }

  crear(){   
    this.service.crear(this.curso).subscribe(curso =>{
      Swal.fire('Nuevo',`El curso ${curso.nombreCurso} fue creado con exito`,`success`)
      this.router.navigate(['/cursos']);
    }, err =>{
      if(err.status === 400){
        this.error = err.error;
        ;
      }
    });
  }

  editar():void{
    this.route.params.subscribe(params =>{
      let id = params['id'];
      if(id){
        this.service.ver(id).subscribe((curso) =>{
          this.curso=curso        
        });
      }
    });
  }

  modificar(){    
    this.service.modificar(this.curso).subscribe(curso =>{
      Swal.fire('Modificado',`Curso ${curso.nombreCurso} modificado con exito`,`success`)
      this.router.navigate(['/cursos']);
    }, err =>{
      if(err.status === 400){
        this.error = err.error;
        ;
      }
    });
  }
}
