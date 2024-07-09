import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresas/empresa';
import { EmpresasService } from '../empresas/empresa.service';
import { Vehiculo } from '../vehiculos/vehiculo';
import { VehiculosService } from '../vehiculos/vehiculo.service';
import { Conductor } from './conductor';
import { ConductorService } from './conductor.service';

@Component({
  selector: 'app-form-conductor',
  templateUrl: './form-conductor.component.html',
  styleUrls: ['./form-conductor.component.css']
})
export class FormConductorComponent implements OnInit {

  conductores:Conductor = new Conductor();
  vehiculos:Vehiculo[] = [];
  empresas: Empresa[] = [];
  titulo:string="Registro de Conductores";

  constructor(private conductorService:ConductorService,private empresaService:EmpresasService,private vehiculoService:VehiculosService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.cargar();
    
    this.empresaService.getAll().subscribe(
      e =>this.empresas =e
      );

    this.vehiculoService.getAll().subscribe(
        e =>this.vehiculos =e
        );

  }

  create():void{
    console.log(this.conductores);
    
    this.conductorService.create(this.conductores).subscribe(
      res=>this.router.navigate(['/conductores'])
    )
  }

  update():void{
    this.conductorService.update(this.conductores).subscribe(
      e=>this.router.navigate(['/conductores'])
    )
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=> {
        let id=e['id'];
        if(id){
          this.conductorService.get(id).subscribe(
            es=>this.conductores=es
          );

        }
      }
    )
  }

  

}
