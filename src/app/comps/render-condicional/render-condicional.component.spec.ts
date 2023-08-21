import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCondicionalComponent } from './render-condicional.component';

describe('RenderCondicionalComponent', () => {
  let component: RenderCondicionalComponent;
  let fixture: ComponentFixture<RenderCondicionalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderCondicionalComponent]
    });
    fixture = TestBed.createComponent(RenderCondicionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
