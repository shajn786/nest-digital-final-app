import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsecuritynavbarComponent } from './adminsecuritynavbar.component';

describe('AdminsecuritynavbarComponent', () => {
  let component: AdminsecuritynavbarComponent;
  let fixture: ComponentFixture<AdminsecuritynavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsecuritynavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsecuritynavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
