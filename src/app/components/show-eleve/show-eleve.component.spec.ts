import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEleveComponent } from './show-eleve.component';

describe('ShowEleveComponent', () => {
  let component: ShowEleveComponent;
  let fixture: ComponentFixture<ShowEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
