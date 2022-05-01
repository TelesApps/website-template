import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMediaComponent } from './landing-media.component';

describe('LandingMediaComponent', () => {
  let component: LandingMediaComponent;
  let fixture: ComponentFixture<LandingMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
