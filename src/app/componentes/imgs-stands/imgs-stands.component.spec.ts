import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgsStandsComponent } from './imgs-stands.component';

describe('ImgsStandsComponent', () => {
  let component: ImgsStandsComponent;
  let fixture: ComponentFixture<ImgsStandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgsStandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgsStandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
