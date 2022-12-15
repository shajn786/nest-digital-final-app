import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpProfileNewComponent } from './emp-profile-new.component';

describe('EmpProfileNewComponent', () => {
  let component: EmpProfileNewComponent;
  let fixture: ComponentFixture<EmpProfileNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpProfileNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpProfileNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
