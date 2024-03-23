import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HooksPageComponent } from './hooks-page.component';

describe('HooksPageComponent', () => {
  let component: HooksPageComponent;
  let fixture: ComponentFixture<HooksPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HooksPageComponent]
    });
    fixture = TestBed.createComponent(HooksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
