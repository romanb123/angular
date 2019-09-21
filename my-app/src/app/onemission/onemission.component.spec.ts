import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnemissionComponent } from './onemission.component';

describe('OnemissionComponent', () => {
  let component: OnemissionComponent;
  let fixture: ComponentFixture<OnemissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnemissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnemissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
