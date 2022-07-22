import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFuncionariosComponent } from './cadastrar-funcionarios.component';

describe('CadastrarFuncionariosComponent', () => {
  let component: CadastrarFuncionariosComponent;
  let fixture: ComponentFixture<CadastrarFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarFuncionariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
