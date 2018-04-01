import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTokenComponent } from './buy-token.component';

describe('BuyTokenComponent', () => {
  let component: BuyTokenComponent;
  let fixture: ComponentFixture<BuyTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
