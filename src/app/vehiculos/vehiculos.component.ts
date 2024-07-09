import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresas/empresa';
import { Vehiculo } from './vehiculo';
import { VehiculosService } from './vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculoComponent implements OnInit {

  titulo: string = "Lista de Vehiculos";

  vehiculos: Vehiculo[] = [];
  //empresaService: any;


  constructor(private vehiculoService: VehiculosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.vehiculoService.getAll().subscribe(
      e => this.vehiculos = e
    );

  }

  delete(vehiculos: Vehiculo): void {
    console.log("Hi delete 2" + vehiculos.id_placa);
    this.vehiculoService.deleteV(vehiculos.id_placa).subscribe(
      res => this.vehiculoService.getAll().subscribe(
        response => this.vehiculos = response
      )
    );

  }





}
