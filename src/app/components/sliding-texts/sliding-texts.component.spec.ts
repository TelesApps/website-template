import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingTextsComponent } from './sliding-texts.component';

describe('SlidingTextsComponent', () => {
  let component: SlidingTextsComponent;
  let fixture: ComponentFixture<SlidingTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidingTextsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
