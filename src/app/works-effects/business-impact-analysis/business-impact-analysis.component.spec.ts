import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessImpactAnalysisComponent } from './business-impact-analysis.component';

describe('BusinessImpactAnalysisComponent', () => {
  let component: BusinessImpactAnalysisComponent;
  let fixture: ComponentFixture<BusinessImpactAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessImpactAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessImpactAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
