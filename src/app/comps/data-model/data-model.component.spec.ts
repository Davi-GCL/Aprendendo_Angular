import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModelComponent } from './data-model.component';

describe('DataModelComponent', () => {
  let component: DataModelComponent;
  let fixture: ComponentFixture<DataModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataModelComponent]
    });
    fixture = TestBed.createComponent(DataModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
