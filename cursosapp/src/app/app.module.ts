import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EmpleadoFormComponent } from './components/empleados/empleado-form.component';
import { CursoFormComponent } from './components/cursos/curso-form.component';
import { GrupoFormComponent } from './components/grupos/grupo-form.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioFormComponent } from './components/usuarios/usuario-form.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { EmpresaFormComponent } from './components/empresas/empresa-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursoFormComponent,
    EmpleadosComponent,
    EmpleadoFormComponent, 
    GruposComponent,
    HomeComponent,
    CursoFormComponent,
    GrupoFormComponent,
    UsuariosComponent,
    UsuarioFormComponent,
    EmpresasComponent,
    EmpresaFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
