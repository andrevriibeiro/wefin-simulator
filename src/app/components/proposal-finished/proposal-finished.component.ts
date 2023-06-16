import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proposal } from 'src/app/shared/interface/proposal.insterface';
import { SimulatorService } from 'src/app/shared/service/simulator.service';

@Component({
  selector: 'app-proposal-finished',
  templateUrl: './proposal-finished.component.html',
  styleUrls: ['./proposal-finished.component.scss']
})
export class ProposalFinishedComponent implements OnInit {

  public proposal: Proposal = {
    installments: 0,
    proposalValue: 0
  }

  public constructor(private simulatorService: SimulatorService, private router: Router) {

  }

  ngOnInit(): void {
      this.proposal = this.simulatorService.getProposal();
  }

  /**
   * metodo responsavel por recuperar o valor do juros cobrado
   * 
   * @returns valor do juros
  */
  public getInterest(): number {
    return (this.proposal.proposalValue * 5) / 100;
  }

  /**
   * metodo responsavel por retornar a pagina inicial
   * 
   */
  public goToHome() {
    this.router.navigate(['']);
  }
}
