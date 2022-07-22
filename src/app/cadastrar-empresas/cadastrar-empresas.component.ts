import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-cadastrar-empresas',
  templateUrl: './cadastrar-empresas.component.html',
  styleUrls: ['./cadastrar-empresas.component.css']
})
export class CadastrarEmpresasComponent implements OnInit {
 
  //atributos
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
 
  constructor(
    //inicializando por injeção de dependência
    private httpClient: HttpClient
  ) { }
 
  //criando o modelo do formulário
  formCadastro = new FormGroup({
 
    //campo para preenchimento do nomeFantasia
    nomeFantasia: new FormControl('', [
      Validators.required, //campo obrigatório
      Validators.minLength(10), //mínimo de caracteres
      Validators.maxLength(150), //máximo de caracteres
    ]),
    //campo para preenchimento do razaoSocial
    razaoSocial: new FormControl('', [
      Validators.required, //campo obrigatório
      Validators.minLength(10), //mínimo de caracteres
      Validators.maxLength(150), //máximo de caracteres
    ]),
 
    //campo para preenchimento do cnpj
    cnpj: new FormControl('', [
      Validators.required
    ])
 
  });
 
  ngOnInit(): void {
  }
 
  //função para acessar os campos do formulário na página HTML
  get form(): any {
    return this.formCadastro.controls;
  }
 
  //função para executar a ação do SUBMIT do formulário
  onSubmit(): void {
 
      this.limparMensagens();
    
      //fazendo a requisição para a API..
      this.httpClient.post(environment.apiUrl + "/empresas", this.formCadastro.value)
        .subscribe(
          (data:any) => { //retorno de sucesso 2xx
 
            //exibir mensagem de sucesso na página  
            this.mensagem_sucesso = data.mensagem;

            //limpar os campos do formulário
            this.formCadastro.reset();
          },
          e => { //retorno de erro 4xx ou 5xx
            
            //verificar o tipo do erro obtido
            switch(e.status) { //código do erro

              case 400:
                this.mensagem_erro = "Ocorreram erros de validação nos dados enviados.";
                break;

              case 422:
                this.mensagem_erro = e.error.mensagem;
                break;
 
              case 500:
                this.mensagem_erro = "Erro! Entre em contato com o suporte.";
                break;
            }
          }
          )
    }
   
    //função para limpar as mensagens
    limparMensagens(): void {
      this.mensagem_sucesso = '';
      this.mensagem_erro = '';
    }
  }
  