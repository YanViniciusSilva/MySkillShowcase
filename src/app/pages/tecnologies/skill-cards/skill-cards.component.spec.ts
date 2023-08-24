import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillCardsComponent } from './skill-cards.component';

describe('SkillCardsComponent', () => {
  let component: SkillCardsComponent;
  let fixture: ComponentFixture<SkillCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillCardsComponent]
    });
    fixture = TestBed.createComponent(SkillCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
