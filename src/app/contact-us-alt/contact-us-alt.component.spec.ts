import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsAltComponent } from './contact-us-alt.component';

describe('ContactUsAltComponent', () => {
  let component: ContactUsAltComponent;
  let fixture: ComponentFixture<ContactUsAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsAltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
