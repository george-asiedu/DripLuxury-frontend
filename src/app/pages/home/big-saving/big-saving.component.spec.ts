import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSavingComponent } from './big-saving.component';

describe('BigSavingComponent', () => {
  let component: BigSavingComponent;
  let fixture: ComponentFixture<BigSavingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigSavingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
