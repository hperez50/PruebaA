import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { FormEmpresaComponent } from './empresas/form-empresa.component';
import { VehiculoComponent } from './vehiculos/vehiculos.component';
import { FormVehiculoComponent } from './vehiculos/form-vehiculo.component';
import { ConductoresComponent } from './conductores/conductores.component';
import { FormConductorComponent } from './conductores/form-conductor.component';


const routes: Routes = [
  { path: '', redirectTo: '/empresas', pathMatch:'full' },
  { path: 'empresas', component:EmpresasComponent },
  { path: 'empresas/form', component:FormEmpresaComponent },
  { path: 'empresas/form/:id', component:FormEmpresaComponent },
  { path: 'vehiculos', component:VehiculoComponent },
  { path: 'vehiculos/form', component:FormVehiculoComponent },
  { path: 'vehiculos/form/:id', component:FormVehiculoComponent },
  { path: 'conductores', component:ConductoresComponent },
  { path: 'conductores/form', component:FormConductorComponent },
  { path: 'conductores/form/:id', component:FormConductorComponent },

  
  

];

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    FormEmpresaComponent,
    VehiculoComponent,
    FormVehiculoComponent,
    ConductoresComponent,
    FormConductorComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
