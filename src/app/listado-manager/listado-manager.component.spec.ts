import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoManagerComponent } from './listado-manager.component';

describe('ListadoManagerComponent', () => {
  let component: ListadoManagerComponent;
  let fixture: ComponentFixture<ListadoManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
