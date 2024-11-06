import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialConsumoPage } from './historial-consumo.page';

describe('HistorialConsumoPage', () => {
  let component: HistorialConsumoPage;
  let fixture: ComponentFixture<HistorialConsumoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialConsumoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
