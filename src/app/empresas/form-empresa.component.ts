import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from './empresa';
import { EmpresasService } from './empresa.service';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {

  empresa:Empresa = new Empresa();
  titulo:string="Registro de Empresas";

  constructor(private empresaService:EmpresasService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{
    this.activatedRoute.params.subscribe(
      e=> {
        let id=e['id'];
        if(id){
          this.empresaService.get(id).subscribe(
            es=>this.empresa=es
          );

        }
      }
    )
  }

  create():void{
    console.log(this.empresa);
    if (this.empresa.id_empresa != null && this.empresa.nombre_empresa != "" && this.empresa.tipo_id_empresa!= "" 
        && this.empresa.direccion!= "" 
        && this.empresa.ciudad!= "" 
        && this.empresa.departamente!= "" 
        && this.empresa.pais!= "" 
        && this.empresa.telefono!= null 
        && this.empresa.tipo_id_repre!= ""
        && this.empresa.id_repre!= null 
        && this.empresa.nombre_repre!= "" 
        && this.empresa.direccion_repre!= "" 
        && this.empresa.ciudad_repre!= "" 
        && this.empresa.departamento_repre!= "" 
        && this.empresa.pais_repre!= "" 
        && this.empresa.telefono_repre!= null 
        && this.empresa.telefono_repre!= 0
        && this.empresa.id_empresa != 0){

        this.empresaService.create(this.empresa).subscribe(
          res=>this.router.navigate(['/empresas'])
        )
      }else{
        alert("El campo no puede ser nulo, por favor validar");
      }
      }

  update():void{
    this.empresaService.update(this.empresa).subscribe(
      e=>this.router.navigate(['/empresas'])
    )
  }



  
}
