import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlEndPoint:string = 'http://localhost:8090/api/empleado';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { 
   }

  listar():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.urlEndPoint);
  }

  ver(id:number):Observable<Empleado>{
    return this.http.get<Empleado>(`${this.urlEndPoint}/${id}`);
  }

  crear(empleado:Empleado):Observable<Empleado>{
    return this.http.post<Empleado>(this.urlEndPoint,empleado,{headers:this.httpHeaders});
  }

  modificar(empleado:Empleado):Observable<Empleado>{
    return this.http.put<Empleado>(`${this.urlEndPoint}/${empleado.id}`,
    empleado,{headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`,
    {headers:this.httpHeaders});
  }

  listarPagina(page:string,size:string):Observable<any>{
    const  params = new HttpParams()
    .set('page',page)
    .set('size',size);
    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params});
  }

}