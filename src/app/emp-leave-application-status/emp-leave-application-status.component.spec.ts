import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLeaveApplicationStatusComponent } from './emp-leave-application-status.component';

describe('EmpLeaveApplicationStatusComponent', () => {
  let component: EmpLeaveApplicationStatusComponent;
  let fixture: ComponentFixture<EmpLeaveApplicationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpLeaveApplicationStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpLeaveApplicationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
