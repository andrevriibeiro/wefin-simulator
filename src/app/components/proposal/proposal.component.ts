import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Proposal } from 'src/app/shared/interface/proposal.insterface';
import { FinalizeProposalModalComponent } from '../finalize-proposal-modal/finalize-proposal-modal.component';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent {

  @Input() proposal: Proposal = {
    proposalValue: 0,
    installments: 0
  };

  constructor(private dialog: MatDialog, private router: Router) {
  }

  public proposalAccepted = false;

  /**
   * metodo responsavel por finalizar a proposta exibindo um resumo
   * da proposta para o cliente.
   * 
   */
  finalizeProposal() {
    const ref = this.dialog.open(FinalizeProposalModalComponent, {
      data: {
        proposal: this.proposal
      }
    });
    ref.afterClosed().subscribe((resp) => {
      if(resp === 'confirm') {
        this.router.navigate(['/emprestimo']);
      }
    })
  }

  /**
   * metodo responsavel por recuperar a quantidade de parcelas existente na proposta
   * 
   * @param start valor inicial de parcela
   * @returns 
   */
  range(): number[] {
    const numeros: number[] = [];

    for (let i = 1; i <= this.proposal.installments; i++) {
      numeros.push(i);
    }
    return numeros;
  }

  /**
   * metodo responsavel por recuperar as datas para pagamento das parcelas do emprestimo
   * 
   * @param numberOfDays quantidade de dias
   *  
   * @returns data da parcela
   */
  public getInstallmentDate(numberOfDays: number): Date {
    const dataAtual = new Date();
    const proximoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + numberOfDays, dataAtual.getDate());
    return proximoMes;
  }

  /**
    * metodo responsavel por recuperar o valor do juros cobrado
    * 
    * @returns valor do juros
    */
  public getInterest(): number {
    return (this.proposal.proposalValue * 5) / 100;
  }
}
