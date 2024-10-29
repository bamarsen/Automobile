import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrventretienComponent } from './srventretien.component';

describe('SrventretienComponent', () => {
  let component: SrventretienComponent;
  let fixture: ComponentFixture<SrventretienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrventretienComponent]
    });
    fixture = TestBed.createComponent(SrventretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
