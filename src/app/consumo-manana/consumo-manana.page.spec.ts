import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsumoMananaPage } from './consumo-manana.page';

describe('ConsumoMananaPage', () => {
  let component: ConsumoMananaPage;
  let fixture: ComponentFixture<ConsumoMananaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoMananaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
