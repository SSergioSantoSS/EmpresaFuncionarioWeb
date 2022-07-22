import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-funcionarios',
  templateUrl: './cadastrar-funcionarios.component.html',
  styleUrls: ['./cadastrar-funcionarios.component.css']
})
export class CadastrarFuncionariosComponent implements OnInit {
 
  //atributos
  empresas: any[] = [];
 
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
  constructor(
 
    //inicializando por injeção de dependência
    private httpClient: HttpClient
  ) { }
 
  //criando a estrutura do formulário..
  formCadastro = new FormGroup({
 
    //campo para preenchimento do nome
    nome: new FormControl('', [
      Validators.required //campo obrigatório
    ]),
    //campo para preenchimento do cpf
    cpf: new FormControl('', [
      Validators.required //campo obrigatório
    ]),
    //campo para preenchimento do matricula
    matricula: new FormControl('', [
      Validators.required
    ]),
    //campo para preenchimento do dataAdmissao
    dataAdmissao: new FormControl('', [
      Validators.required
    ]),
    //campo para preenchimento do idEmpresa
    idEmpresa: new FormControl('', [
      Validators.required
    ]),
 
  });
 
  //função utilizada para acessar os campos do formulário na página
  get form(): any {
    return this.formCadastro.controls;
  }
 
  //função executada ao carregar o componente
  ngOnInit(): void {
    //requisição para a API -> GET /api/empresas
    this.httpClient.get(environment.apiUrl + "/empresas")
      .subscribe(
        data => {
          this.empresas = data as any[];
        }
      )
  }
 
 
  //função para processar o evento SUBMIT do formulário
  onSubmit(): void {
    
    this.limparMensagens();
 
    this.httpClient.post(environment.apiUrl + "/funcionarios", this.formCadastro.value)
      .subscribe(
        (data:any) => { //resposta de sucesso!
          this.mensagem_sucesso = data.mensagem;
          this.formCadastro.reset();
        },
        e => { //resposta de erro!
          //verificar o tipo do erro obtido
          switch(e.status) { //código do erro
 
            case 400:
              this.mensagem_erro = 'Ocorreram erros de validação nos dados enviados.';
              break;
 
            case 422:
              this.mensagem_erro = e.error.mensagem;
              break;
 
            case 500:
              this.mensagem_erro = "Erro! Entre em contato com o suporte.";
              break;
          } 
        }
      );
  }
 
  //função para limpar as mensagens
  limparMensagens(): void {
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
  }
 
}
