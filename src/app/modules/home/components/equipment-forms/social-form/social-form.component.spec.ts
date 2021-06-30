import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialFormComponent } from './social-form.component';

describe('SocialFormComponent', () => {
  let component: SocialFormComponent;
  let fixture: ComponentFixture<SocialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
