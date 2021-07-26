import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerOverviewComponent } from './progress-spinner-overview.component';

describe('ProgressSpinnerOverviewComponent', () => {
  let component: ProgressSpinnerOverviewComponent;
  let fixture: ComponentFixture<ProgressSpinnerOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSpinnerOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressSpinnerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
