import { animate, state, style, transition, trigger } from '@angular/animations';
import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proposal } from 'src/app/shared/interface/proposal.insterface';
import { SimulatorService } from 'src/app/shared/service/simulator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('cardAnimation', [
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('visible => hidden', [
        animate('500ms ease-out')
      ]),
      transition('hidden => visible', [
        animate('500ms ease-in')
      ])
    ])
  ]
})
export class HomeComponent {

  formGroup: FormGroup;

  public totalValue: number = 5000;
  public maxProposalValue: number = 100000;
  public minProposalValue: number = 5000;
  public step: number = 500;

  public displayProposal: boolean = false;
  public displayProposalValueCard: boolean = true;

  public firstCardState: string = 'visible';

  proposal: Proposal = {
    proposalValue: 0,
    installments: 0
  };

  constructor(private formBuilder: FormBuilder, private simulatorService: SimulatorService) {
    this.formGroup = this.formBuilder.group({
      proposalValue: [5000, [Validators.required, Validators.min(5000), Validators.max(100000)]],
      fullName: ['', Validators.required],
      installments: ['', [Validators.required, Validators.min(12), Validators.max(48)]]
    });
  }

  /**
   * metodo responsavel por avancar para a proxima etapa
   * da solicitacao de emprestimo
   */
  public nextStep() {
    this.formGroup.get('proposalValue')?.setValue(this.totalValue);
    this.firstCardState = 'hidden';
    setTimeout(() => {
      this.displayProposalValueCard = !this.displayProposalValueCard;
      this.firstCardState = 'visible';
    }, 500);
  }

  /**
   * metodo responsavel por desabilitar o botao de proximo passo
   * 
   * @returns valor boolean indicando se desabilita/habilita btn
   */
  public disableNextStepBtn(): boolean {
    return this.totalValue < this.minProposalValue ? true : false;
  }

  /**
   * methodo responsabel por realizar a proposta para o cliente
   */
  public simulate() {
    const data = {
      fullName: this.formGroup.get('fullName')?.value,
      proposalValue: this.formGroup.get('proposalValue')?.value,
      installments: this.formGroup.get('installments')?.value
    }
    this.displayProposal = true;
    this.simulatorService.simulateLending(data).subscribe((resp: Proposal) => {
      this.proposal = resp;
    });
  }
}
