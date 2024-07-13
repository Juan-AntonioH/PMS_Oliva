import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfrecemosComponent } from './ofrecemos.component';

describe('OfrecemosComponent', () => {
  let component: OfrecemosComponent;
  let fixture: ComponentFixture<OfrecemosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfrecemosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfrecemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
