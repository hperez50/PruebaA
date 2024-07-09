import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresas/empresa';
import { Vehiculo } from './vehiculo';
import { VehiculosService } from './vehiculo.service';
//import { EmpresasService } from '../empresas/empresa.service';
import { EmpresasService } from '../empresas/empresa.service';

@Component({
  selector: 'app-form-vehiculo',
  templateUrl: './form-vehiculo.component.html',
  styleUrls: ['./form-vehiculo.component.css']
})
export class FormVehiculoComponent implements OnInit {


  vehiculos:Vehiculo = new Vehiculo();
  empresas: Empresa[] = [];
  titulo:string="Registro de Vehiculos";

  
  constructor(private empresaService:EmpresasService,private vehiculoService:VehiculosService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.cargar();

    this.empresaService.getAll().subscribe(
      e =>this.empresas =e
      );
    
  }

  create():void{
    console.log(this.vehiculos);
    
    this.vehiculoService.create(this.vehiculos).subscribe(
      res=>this.router.navigate(['/vehiculos'])
    )
  }

  update():void{
    this.vehiculoService.update(this.vehiculos).subscribe(
      e=>this.router.navigate(['/vehiculos'])
    )
  }
 

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=> {
        let id=e['id'];
        if(id){
          this.vehiculoService.get(id).subscribe(
            es=>this.vehiculos=es
          );

        }
      }
    )
  }

}
