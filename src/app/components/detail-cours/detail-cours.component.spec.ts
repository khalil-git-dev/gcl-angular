import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCoursComponent } from './detail-cours.component';

describe('DetailCoursComponent', () => {
  let component: DetailCoursComponent;
  let fixture: ComponentFixture<DetailCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
