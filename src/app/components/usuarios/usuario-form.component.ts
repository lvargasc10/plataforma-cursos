
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  titulo:string='Formulario Usuario';
  usuario:Usuario = new Usuario();
  error:any;
  constructor(private service:UsuarioService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.editar();
  }

  crear(){
    this.service.crear(this.usuario).subscribe(usuario =>{
      Swal.fire('Crear Usuario',`Usuario ${usuario.identificacion} fue creado con exito`,'success');
      this.router.navigate(['/usuarios']);
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
        this.service.ver(id).subscribe((usuario) => this.usuario=usuario);
      }
    })
  }

  modificar(){
    this.service.modificar(this.usuario).subscribe(usuario =>{
      Swal.fire('Modificado',`Usuario ${usuario.identificacion} modificado con exito`,`success`)
      this.router.navigate(['/usuarios']);
    }, err =>{
      if(err.status === 400){
        this.error = err.error;
      }
    })
  }
}
