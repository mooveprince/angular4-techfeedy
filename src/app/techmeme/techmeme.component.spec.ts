import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechmemeComponent } from './techmeme.component';

describe('TechmemeComponent', () => {
  let component: TechmemeComponent;
  let fixture: ComponentFixture<TechmemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechmemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechmemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
