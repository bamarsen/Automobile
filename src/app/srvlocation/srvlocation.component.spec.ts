import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvlocationComponent } from './srvlocation.component';

describe('SrvlocationComponent', () => {
  let component: SrvlocationComponent;
  let fixture: ComponentFixture<SrvlocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SrvlocationComponent]
    });
    fixture = TestBed.createComponent(SrvlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
