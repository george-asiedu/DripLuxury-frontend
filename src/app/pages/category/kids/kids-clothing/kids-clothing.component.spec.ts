import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsClothingComponent } from './kids-clothing.component';

describe('KidsClothingComponent', () => {
  let component: KidsClothingComponent;
  let fixture: ComponentFixture<KidsClothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsClothingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KidsClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
