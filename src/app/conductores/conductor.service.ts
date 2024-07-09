import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conductor } from './conductor';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

  private url:string="http://localhost:8080/api/drivers/";


  constructor(private http:HttpClient) { }

// Obtener el listado de conductores registrados
getAll():Observable<Conductor[]>{
  return this.http.get<Conductor[]>(this.url);

}

//crear conductor
create(conductor:Conductor):Observable<Conductor>{
  return this.http.post<Conductor>(this.url, conductor);
}

//obtener una conductor
get(id:number):Observable<Conductor>{
  return this.http.get<Conductor>(this.url+ '/'+ id);

}
getC(id:string):Observable<Conductor>{
  return this.http.get<Conductor>(this.url+ '/'+ id);

}

// actualizar conductor
update(conductor:Conductor):Observable<Conductor>{
  return this.http.put<Conductor>(this.url, conductor);
  //return this.http.put<Empresa>(this.url+ '/'+ id);
}



// elimminar una conductor
delete(id:number):Observable<Conductor>{
  return this.http.delete<Conductor>(this.url+ '/'+ id);

}

// elimminar una conductor
deleteC(id:string):Observable<Conductor>{
  return this.http.delete<Conductor>(this.url+ '/'+ id);

}



}
