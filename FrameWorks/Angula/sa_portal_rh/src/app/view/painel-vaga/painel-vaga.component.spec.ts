import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelVagaComponent } from './painel-vaga.component';

describe('PainelVagaComponent', () => {
  let component: PainelVagaComponent;
  let fixture: ComponentFixture<PainelVagaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelVagaComponent]
    });
    fixture = TestBed.createComponent(PainelVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
