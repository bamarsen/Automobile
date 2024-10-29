import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvachatComponent } from './srvachat.component';

describe('SrvachatComponent', () => {
  let component: SrvachatComponent;
  let fixture: ComponentFixture<SrvachatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrvachatComponent]
    });
    fixture = TestBed.createComponent(SrvachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
