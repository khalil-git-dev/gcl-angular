import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreCoursComponent } from './registre-cours.component';

describe('RegistreCoursComponent', () => {
  let component: RegistreCoursComponent;
  let fixture: ComponentFixture<RegistreCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistreCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
