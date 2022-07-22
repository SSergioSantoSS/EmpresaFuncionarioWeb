import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-editar-funcionarios',
  templateUrl: './editar-funcionarios.component.html',
  styleUrls: ['./editar-funcionarios.component.css']
})
export class EditarFuncionariosComponent implements OnInit {
 
  //atributos
 
  empresas: any[] = [];
 
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
 
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }
 
  //criando a estrutura do formulário..
  formEdicao = new FormGroup({
 
    //campo para armazenar o id do funcionário
    idFuncionario: new FormControl('', []),
 
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
    //campo para preenchimento do status
    ativo: new FormControl('', [
      Validators.required
    ]),
  });
 
  //função utilizada para acessar os campos do formulário na página
  get form(): any {
    return this.formEdicao.controls;
  }
 
  ngOnInit(): void {
 
    //requisição para a API -> GET /api/empresas
    this.httpClient.get(environment.apiUrl + "/empresas")
      .subscribe(
        data => {
          this.empresas = data as any[];
        }
      )
 
    //capturar o id do funcionário enviado pela URL
    const idFuncionario = this.activatedRoute.snapshot
                          .paramMap.get('idFuncionario');
    //consultar os dados do funcionário através do ID..
    this.httpClient.get(environment.apiUrl + "/funcionarios/" + idFuncionario)
        .subscribe(
          (data:any) => {
            data.dataAdmissao = data.dataAdmissao.split('T')[0];
            this.formEdicao.patchValue(data);
          }
        )
      }
 
      //função para processar o evento SUBMIT do formulário
      onSubmit(): void {
      }
     
      //função para limpar as mensagens
      limparMensagens(): void {
        this.mensagem_sucesso = '';
        this.mensagem_erro = '';
      }
    }
    