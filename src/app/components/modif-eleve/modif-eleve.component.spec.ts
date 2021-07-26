import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEleveComponent } from './modif-eleve.component';

describe('ModifEleveComponent', () => {
  let component: ModifEleveComponent;
  let fixture: ComponentFixture<ModifEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
