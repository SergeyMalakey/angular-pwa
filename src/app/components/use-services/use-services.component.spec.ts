import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseServicesComponent } from './use-services.component';

describe('UseServicesComponent', () => {
  let component: UseServicesComponent;
  let fixture: ComponentFixture<UseServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
