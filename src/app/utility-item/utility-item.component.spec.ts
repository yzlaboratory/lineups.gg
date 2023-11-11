import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityItemComponent } from './utility-item.component';

describe('UtilityItemComponent', () => {
  let component: UtilityItemComponent;
  let fixture: ComponentFixture<UtilityItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [UtilityItemComponent]
    });
    fixture = TestBed.createComponent(UtilityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
