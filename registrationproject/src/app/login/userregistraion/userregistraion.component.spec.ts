import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserregistraionComponent } from './userregistraion.component';

describe('UserregistraionComponent', () => {
  let component: UserregistraionComponent;
  let fixture: ComponentFixture<UserregistraionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserregistraionComponent]
    });
    fixture = TestBed.createComponent(UserregistraionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
