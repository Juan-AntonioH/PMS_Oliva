import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPagesComponent } from './titulo-pages.component';

describe('TituloPagesComponent', () => {
  let component: TituloPagesComponent;
  let fixture: ComponentFixture<TituloPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TituloPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
