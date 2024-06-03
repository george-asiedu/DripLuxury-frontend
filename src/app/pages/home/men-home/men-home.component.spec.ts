import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenHomeComponent } from './men-home.component';

describe('MenHomeComponent', () => {
  let component: MenHomeComponent;
  let fixture: ComponentFixture<MenHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
