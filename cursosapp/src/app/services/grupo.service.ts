import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';
import { EmpleadosGrupo } from '../models/empleados-grupo';
import { Grupo } from '../models/grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private urlEndPoint:string='http://localhost:8090/api/grupos';
  private httpHeaders= new HttpHeaders({'Content-Type':'application/json'});
  
  constructor(private http:HttpClient) {}
   listar():Observable<Grupo[]>{
     return this.http.get<Grupo[]>(this.urlEndPoint);
   }
   ver(id:number):Observable<Grupo>{
      return this.http.get<Grupo>(`${this.urlEndPoint}/${id}`);
   }

   crear(grupo:Grupo): Observable<Grupo>{
     return this.http.post<Grupo>(this.urlEndPoint,grupo,{headers:this.httpHeaders});
   }
   modificar(grupo:Grupo):Observable<Grupo>{
    return this.http.put<Grupo>(`${this.urlEndPoint}/${grupo.id}`,
    grupo,{headers:this.httpHeaders});
  }

  agregarEmpleadoGrupo(empleadosgrupo:EmpleadosGrupo):Observable<Grupo>{
    return this.http.put<Grupo>(`${this.urlEndPoint}/${empleadosgrupo.id}/agregar-empleado`,
    empleadosgrupo,{headers:this.httpHeaders});
  }

   eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
   }
   listarpagina(page:string,size:string):Observable<any>{
     const params= new HttpParams()
     .set('page',page)
     .set('size',size);
    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params});
   }

}
