import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScnInfoComponent } from './scn-info.component';

describe('ScnInfoComponent', () => {
  let component: ScnInfoComponent;
  let fixture: ComponentFixture<ScnInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScnInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScnInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
