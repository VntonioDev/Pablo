import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosHistoricosAdminPage } from './datos-historicos-admin.page';

describe('DatosHistoricosAdminPage', () => {
  let component: DatosHistoricosAdminPage;
  let fixture: ComponentFixture<DatosHistoricosAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosHistoricosAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
