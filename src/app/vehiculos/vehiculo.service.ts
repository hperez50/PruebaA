import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private url:string="http://localhost:8080/api/cards/";
  constructor(private http:HttpClient) { }


  // Obtener el listado de empresas registradas
  getAll():Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(this.url);

  }

  //crear Vehiculo
  create(vehiculo:Vehiculo):Observable<Vehiculo>{
    return this.http.post<Vehiculo>(this.url, vehiculo);
  }

   //obtener una Vehiculo
   get(id:number):Observable<Vehiculo>{
    return this.http.get<Vehiculo>(this.url+ '/'+ id);

  }


 // actualizar Vehiculo
 update(vehiculo:Vehiculo):Observable<Vehiculo>{
  return this.http.put<Vehiculo>(this.url, vehiculo);
  //return this.http.put<Empresa>(this.url+ '/'+ id);
 }

  // elimminar una empresa
  delete(id:number):Observable<Vehiculo>{
    return this.http.delete<Vehiculo>(this.url+ '/'+ id);

  }
  
  deleteV(id:string):Observable<Vehiculo>{
    return this.http.delete<Vehiculo>(this.url+ '/'+ id);

  }



}
