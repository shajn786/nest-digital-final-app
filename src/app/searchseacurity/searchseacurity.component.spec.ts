import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchseacurityComponent } from './searchseacurity.component';

describe('SearchseacurityComponent', () => {
  let component: SearchseacurityComponent;
  let fixture: ComponentFixture<SearchseacurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchseacurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchseacurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
