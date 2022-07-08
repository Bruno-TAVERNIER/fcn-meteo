import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TplMeteoComponent } from './tpl-meteo.component';

describe('TplMeteoComponent', () => {
  let component: TplMeteoComponent;
  let fixture: ComponentFixture<TplMeteoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TplMeteoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TplMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
