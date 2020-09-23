import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdashboardComponent } from './chefdashboard.component';

describe('ChefdashboardComponent', () => {
  let component: ChefdashboardComponent;
  let fixture: ComponentFixture<ChefdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
