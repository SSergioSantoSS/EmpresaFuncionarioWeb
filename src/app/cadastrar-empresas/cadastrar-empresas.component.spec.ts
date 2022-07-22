import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEmpresasComponent } from './cadastrar-empresas.component';

describe('CadastrarEmpresasComponent', () => {
  let component: CadastrarEmpresasComponent;
  let fixture: ComponentFixture<CadastrarEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEmpresasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
