import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlFormsWrapperComponent } from './sl-forms-wrapper.component';

describe('SlFormsWrapperComponent', () => {
  let component: SlFormsWrapperComponent;
  let fixture: ComponentFixture<SlFormsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlFormsWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlFormsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
