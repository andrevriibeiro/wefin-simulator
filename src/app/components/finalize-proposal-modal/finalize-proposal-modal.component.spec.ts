import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeProposalModalComponent } from './finalize-proposal-modal.component';

describe('FinalizeProposalModalComponent', () => {
  let component: FinalizeProposalModalComponent;
  let fixture: ComponentFixture<FinalizeProposalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalizeProposalModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizeProposalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
