import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduSecunComponent } from './edu-secun.component';

describe('EduSecunComponent', () => {
  let component: EduSecunComponent;
  let fixture: ComponentFixture<EduSecunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduSecunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduSecunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
