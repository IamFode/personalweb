import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicadaComponent } from './aplicada.component';

describe('AplicadaComponent', () => {
  let component: AplicadaComponent;
  let fixture: ComponentFixture<AplicadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
