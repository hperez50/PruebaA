import { Component, OnInit } from '@angular/core';
import { Conductor } from './conductor';
import { ConductorService } from './conductor.service';

@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css']
})
export class ConductoresComponent implements OnInit {

  titulo:string = "Informe de conductores vinculados a sus vehiculos";

  conductores: Conductor[] = [];

  constructor(private conductorService:ConductorService) { }

  ngOnInit(): void {

    this.conductorService.getAll().subscribe(
      e =>this.conductores=e
    );

  }

  delete(conductores:Conductor):void{
    console.log("Hi delete 3" +conductores.id_conductores);
    this.conductorService.delete(conductores.numero).subscribe(
      res=>this.conductorService.getAll().subscribe(
        response=>this.conductores=response
      )
    );

}}
