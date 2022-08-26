import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailboardPageComponent } from './tailboard-page.component';

describe('TailboardPageComponent', () => {
  let component: TailboardPageComponent;
  let fixture: ComponentFixture<TailboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
