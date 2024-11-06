import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsumoTardePage } from './consumo-tarde.page';

describe('ConsumoTardePage', () => {
  let component: ConsumoTardePage;
  let fixture: ComponentFixture<ConsumoTardePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumoTardePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
