import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalFinishedComponent } from './proposal-finished.component';

describe('ProposalFinishedComponent', () => {
  let component: ProposalFinishedComponent;
  let fixture: ComponentFixture<ProposalFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalFinishedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
