import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBarsComponent } from './skill-bars.component';

describe('SkillBarsComponent', () => {
  let component: SkillBarsComponent;
  let fixture: ComponentFixture<SkillBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
