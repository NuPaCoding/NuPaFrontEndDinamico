import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduUtnComponent } from './edu-utn.component';

describe('EduUtnComponent', () => {
  let component: EduUtnComponent;
  let fixture: ComponentFixture<EduUtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduUtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduUtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
