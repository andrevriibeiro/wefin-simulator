import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proposal } from 'src/app/shared/interface/proposal.insterface';

@Component({
  selector: 'app-finalize-proposal-modal',
  templateUrl: './finalize-proposal-modal.component.html',
  styleUrls: ['./finalize-proposal-modal.component.scss']
})
export class FinalizeProposalModalComponent {

  public proposal: Proposal;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
  public dialogRef: MatDialogRef<FinalizeProposalModalComponent>,) {
    this.proposal = data.proposal;
  }

  public confirm() {
    this.dialogRef.close('confirm');
  }
}
