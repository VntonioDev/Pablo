import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordPage } from './password.page';

describe('PasswordPage', () => {
  let component: PasswordPage;
  let fixture: ComponentFixture<PasswordPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordPage]
    });
    fixture = TestBed.createComponent(PasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});