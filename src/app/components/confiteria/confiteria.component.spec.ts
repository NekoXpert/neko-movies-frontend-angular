import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiteriaComponent } from './confiteria.component';

describe('ConfiteriaComponent', () => {
  let component: ConfiteriaComponent;
  let fixture: ComponentFixture<ConfiteriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfiteriaComponent]
    });
    fixture = TestBed.createComponent(ConfiteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
