import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
 
@Component({
  selector: 'app-consultar-funcionarios',
  templateUrl: './consultar-funcionarios.component.html',
  styleUrls: ['./consultar-funcionarios.component.css']
})
export class ConsultarFuncionariosComponent implements OnInit {
 
  //atributos
  funcionarios: any[] = []; //json array vazio
 
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
  constructor(
    //inicialização por injeção de dependência
    private httpClient: HttpClient
  ) { }
 
  //função executada quando o componente é aberto
  ngOnInit(): void {
 
    //executar uma requisição HTTP GET para a API
    this.httpClient.get(environment.apiUrl + "/funcionarios")
      .subscribe( //promisse (aguardando a resposta da API)
        data => {
          this.funcionarios = data as any[];
        }
      );
  }
 
  //função para excluir o funcionário
  excluirFuncionario(idFuncionario: string) : void {
 
    if(window.confirm('Deseja realmente excluir o funcionário?')) {
      this.limparMensagens();
      this.httpClient.delete(environment.apiUrl 
                             + "/funcionarios/" + idFuncionario)
        .subscribe(
          (data:any) => {
            this.mensagem_sucesso = data.mensagem;
            this.ngOnInit();
          },
          e => {
            //verificar o tipo do erro obtido
            switch(e.status) { //código do erro
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
  }
 
  //função para limpar as mensagens
  limparMensagens(): void {
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
  }
}
