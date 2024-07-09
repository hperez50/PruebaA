import { Component, OnInit } from '@angular/core';
import { Empresa } from './empresa';
import { EmpresasService } from './empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  titulo:string = "Lista de empresas";

  empresas: Empresa[] = [];
  
  constructor(private empresaService:EmpresasService) { }

  ngOnInit(): void {
    this.empresaService.getAll().subscribe(
      e =>this.empresas=e
    );


  }

  delete(empresa:Empresa):void{
    console.log("Hi delete");
    this.empresaService.delete(empresa.id_empresa).subscribe(
      res=>this.empresaService.getAll().subscribe(
        response=>this.empresas=response
      )
    );

  }

}
