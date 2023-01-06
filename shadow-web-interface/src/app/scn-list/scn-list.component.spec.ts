import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScnListComponent } from './scn-list.component';

describe('ScnListComponent', () => {
  let component: ScnListComponent;
  let fixture: ComponentFixture<ScnListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScnListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
