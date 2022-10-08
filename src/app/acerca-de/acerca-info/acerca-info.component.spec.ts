import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaInfoComponent } from './acerca-info.component';

describe('AcercaInfoComponent', () => {
  let component: AcercaInfoComponent;
  let fixture: ComponentFixture<AcercaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
