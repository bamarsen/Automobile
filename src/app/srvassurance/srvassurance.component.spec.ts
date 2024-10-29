import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvassuranceComponent } from './srvassurance.component';

describe('SrvassuranceComponent', () => {
  let component: SrvassuranceComponent;
  let fixture: ComponentFixture<SrvassuranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrvassuranceComponent]
    });
    fixture = TestBed.createComponent(SrvassuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
