import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccionesUsuariosPage } from './acciones-usuarios.page';

describe('AccionesUsuariosPage', () => {
  let component: AccionesUsuariosPage;
  let fixture: ComponentFixture<AccionesUsuariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccionesUsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
