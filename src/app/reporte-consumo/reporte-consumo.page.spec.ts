import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReporteConsumoPage } from './reporte-consumo.page';

describe('ReporteConsumoPage', () => {
  let component: ReporteConsumoPage;
  let fixture: ComponentFixture<ReporteConsumoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteConsumoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
