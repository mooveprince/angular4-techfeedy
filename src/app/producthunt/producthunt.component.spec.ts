import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducthuntComponent } from './producthunt.component';

describe('ProducthuntComponent', () => {
  let component: ProducthuntComponent;
  let fixture: ComponentFixture<ProducthuntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducthuntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducthuntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
