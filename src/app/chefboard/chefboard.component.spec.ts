import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefboardComponent } from './chefboard.component';

describe('ChefboardComponent', () => {
  let component: ChefboardComponent;
  let fixture: ComponentFixture<ChefboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChefboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
