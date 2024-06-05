import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenCategoryHomeComponent } from './men-category-home.component';

describe('MenCategoryHomeComponent', () => {
  let component: MenCategoryHomeComponent;
  let fixture: ComponentFixture<MenCategoryHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenCategoryHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenCategoryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
