import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureFormComponent } from './culture-form.component';

describe('CultureFormComponent', () => {
  let component: CultureFormComponent;
  let fixture: ComponentFixture<CultureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CultureFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
