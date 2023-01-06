import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblEditorComponent } from './tbl-editor.component';

describe('TblEditorComponent', () => {
  let component: TblEditorComponent;
  let fixture: ComponentFixture<TblEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TblEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
