import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TannyComponent } from './tanny.component';

describe('TannyComponent', () => {
  let component: TannyComponent;
  let fixture: ComponentFixture<TannyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TannyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TannyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
