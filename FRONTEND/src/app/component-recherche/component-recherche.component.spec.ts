import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRechercheComponent } from './component-recherche.component';

describe('ComponentRechercheComponent', () => {
  let component: ComponentRechercheComponent;
  let fixture: ComponentFixture<ComponentRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentRechercheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
