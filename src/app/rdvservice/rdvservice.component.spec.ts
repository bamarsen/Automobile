import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvserviceComponent } from './rdvservice.component';

describe('RdvserviceComponent', () => {
  let component: RdvserviceComponent;
  let fixture: ComponentFixture<RdvserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RdvserviceComponent]
    });
    fixture = TestBed.createComponent(RdvserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
