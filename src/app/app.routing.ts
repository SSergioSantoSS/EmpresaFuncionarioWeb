import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
 
//importando os componentes
import { CadastrarEmpresasComponent } from "./cadastrar-empresas/cadastrar-empresas.component";
import { ConsultarEmpresasComponent } from "./consultar-empresas/consultar-empresas.component";
import { CadastrarFuncionariosComponent } from "./cadastrar-funcionarios/cadastrar-funcionarios.component";
import { ConsultarFuncionariosComponent } from "./consultar-funcionarios/consultar-funcionarios.component";
import { EditarEmpresasComponent } from "./editar-empresas/editar-empresas.component";
import { EditarFuncionariosComponent } from "./editar-funcionarios/editar-funcionarios.component";
 
//mapeamento das rotas dos componentes
const routes: Routes = [
    { path : 'cadastrar-empresas', 
           component: CadastrarEmpresasComponent },
    { path : 'consultar-empresas', 
           component: ConsultarEmpresasComponent },
    { path : 'cadastrar-funcionarios', 
           component : CadastrarFuncionariosComponent },
    { path : 'consultar-funcionarios', 
           component : ConsultarFuncionariosComponent },
    { path : 'editar-empresas/:idEmpresa', 
           component: EditarEmpresasComponent },
    { path : 'editar-funcionarios/:idFuncionario', 
           component: EditarFuncionariosComponent }
];
 
//registrando as rotas mapeadas
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 
//exportando este modulo de configuração
export class AppRoutingModule { }
 
