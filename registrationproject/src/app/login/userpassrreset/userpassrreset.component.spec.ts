import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpassrresetComponent } from './userpassrreset.component';

describe('UserpassrresetComponent', () => {
  let component: UserpassrresetComponent;
  let fixture: ComponentFixture<UserpassrresetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserpassrresetComponent]
    });
    fixture = TestBed.createComponent(UserpassrresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
