import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechcrunchComponent } from './techcrunch.component';

describe('TechcrunchComponent', () => {
  let component: TechcrunchComponent;
  let fixture: ComponentFixture<TechcrunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechcrunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechcrunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
