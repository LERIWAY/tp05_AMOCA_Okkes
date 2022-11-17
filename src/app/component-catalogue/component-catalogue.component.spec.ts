import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCatalogueComponent } from './component-catalogue.component';

describe('ComponentCatalogueComponent', () => {
  let component: ComponentCatalogueComponent;
  let fixture: ComponentFixture<ComponentCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
