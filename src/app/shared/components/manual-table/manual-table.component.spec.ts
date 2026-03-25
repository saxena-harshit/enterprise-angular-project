import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualTableComponent } from './manual-table.component';

describe('ManualTableComponent', () => {
  let component: ManualTableComponent;
  let fixture: ComponentFixture<ManualTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManualTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
