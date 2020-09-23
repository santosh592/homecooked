import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefnavigationComponent } from './chefnavigation.component';

describe('ChefnavigationComponent', () => {
  let component: ChefnavigationComponent;
  let fixture: ComponentFixture<ChefnavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
