import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAffichageComponent } from './componentAffichage.component';

describe('ComponentAffichageComponent', () => {
  let component: ComponentAffichageComponent;
  let fixture: ComponentFixture<ComponentAffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentAffichageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
