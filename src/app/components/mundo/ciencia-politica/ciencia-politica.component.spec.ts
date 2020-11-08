import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CienciaPoliticaComponent } from './ciencia-politica.component';

describe('CienciaPoliticaComponent', () => {
  let component: CienciaPoliticaComponent;
  let fixture: ComponentFixture<CienciaPoliticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CienciaPoliticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CienciaPoliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
