import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoFormComponent } from './components/cursos/curso-form.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { HomeComponent } from './components/home/home.component';
import { EmpleadoFormComponent } from './components/empleados/empleado-form.component';
import { EmpresaFormComponent } from './components/empresas/empresa-form.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { GrupoFormComponent } from './components/grupos/grupo-form.component';
import { UsuarioFormComponent } from './components/usuarios/usuario-form.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

const routes: Routes = [
  {path:'cursos',component:CursosComponent},
  {path:'cursos/form',component:CursoFormComponent},
  {path:'cursos/form/:id',component:CursoFormComponent},
  {path:'empleados',component:EmpleadosComponent},
  {path:'empleados/form',component:EmpleadoFormComponent},
  {path:'empleados/form/:id',component:EmpleadoFormComponent},
  {path:'grupos',component:GruposComponent},
  {path:'grupos/form/:id',component:GrupoFormComponent},
  {path:'grupos/form',component:GrupoFormComponent},
  {path:'empresas',component:EmpresasComponent},
  {path:'empresas/form/:id',component:EmpresaFormComponent},
  {path:'empresas/form',component:EmpresaFormComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'usuarios/form',component:UsuarioFormComponent},
  {path:'usuarios/form/:id',component:UsuarioFormComponent}, 
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
