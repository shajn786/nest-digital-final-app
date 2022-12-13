import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallSecurityComponent } from './viewall-security.component';

describe('ViewallSecurityComponent', () => {
  let component: ViewallSecurityComponent;
  let fixture: ComponentFixture<ViewallSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewallSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
