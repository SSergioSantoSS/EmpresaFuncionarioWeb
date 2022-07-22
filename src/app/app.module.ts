import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastrarEmpresasComponent } from './cadastrar-empresas/cadastrar-empresas.component';
import { ConsultarEmpresasComponent } from './consultar-empresas/consultar-empresas.component';
import { CadastrarFuncionariosComponent } from './cadastrar-funcionarios/cadastrar-funcionarios.component';
import { ConsultarFuncionariosComponent } from './consultar-funcionarios/consultar-funcionarios.component';
import { EditarEmpresasComponent } from './editar-empresas/editar-empresas.component';
import { EditarFuncionariosComponent } from './editar-funcionarios/editar-funcionarios.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarEmpresasComponent,
    ConsultarEmpresasComponent,
    CadastrarFuncionariosComponent,
    ConsultarFuncionariosComponent,
    EditarEmpresasComponent,
    EditarFuncionariosComponent
  ],
  imports: [//Registrando e ativando o Import
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
