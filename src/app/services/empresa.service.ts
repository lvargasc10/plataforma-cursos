import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private urlEndPoint:string = 'http://localhost:8090/api/empresas';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { 
   }

  listar():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.urlEndPoint);
  }

  ver(id:number):Observable<Empresa>{
    return this.http.get<Empresa>(`${this.urlEndPoint}/${id}`);
  }

  crear(empresa:Empresa):Observable<Empresa>{
    return this.http.post<Empresa>(this.urlEndPoint,empresa,{headers:this.httpHeaders});
  }

  modificar(empresa:Empresa):Observable<Empresa>{
    return this.http.put<Empresa>(`${this.urlEndPoint}/${empresa.id}`,
    empresa,{headers:this.httpHeaders});
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