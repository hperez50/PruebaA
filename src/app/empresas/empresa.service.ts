import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  private url:string="http://localhost:8080/api/companys/";

  constructor( private http:HttpClient ) { }

  // Obtener el listado de empresas registradas
  getAll():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.url);

  }

  //crear empresa
  create(empresa:Empresa):Observable<Empresa>{
    return this.http.post<Empresa>(this.url, empresa);
  }

  //obtener una empresa
  get(id:number):Observable<Empresa>{
    return this.http.get<Empresa>(this.url+ '/'+ id);

  }

  // actualizar empresa
  update(empresa:Empresa):Observable<Empresa>{
    return this.http.put<Empresa>(this.url, empresa);
    //return this.http.put<Empresa>(this.url+ '/'+ id);
  }

  

  // elimminar una empresa
  delete(id:number):Observable<Empresa>{
    return this.http.delete<Empresa>(this.url+ '/'+ id);

  }

}
