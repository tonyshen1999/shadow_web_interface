import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityAccountsComponent } from './entity-accounts.component';

describe('EntityAccountsComponent', () => {
  let component: EntityAccountsComponent;
  let fixture: ComponentFixture<EntityAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
