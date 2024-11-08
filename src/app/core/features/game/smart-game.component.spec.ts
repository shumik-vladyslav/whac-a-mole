import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartGameComponent } from './smart-game.component';

describe('SmartGameComponent', () => {
  let component: SmartGameComponent;
  let fixture: ComponentFixture<SmartGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
