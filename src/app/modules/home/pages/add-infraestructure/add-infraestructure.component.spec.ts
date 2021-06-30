import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfraestructureComponent } from './add-infraestructure.component';

describe('AddInfraestructureComponent', () => {
  let component: AddInfraestructureComponent;
  let fixture: ComponentFixture<AddInfraestructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInfraestructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInfraestructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
