
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Proposal } from '../interface/proposal.insterface';
@Injectable({
    providedIn: 'root'
})
export class SimulatorService {

    public customerData: any;

    public proposal: Proposal = {
        installments: 0,
        proposalValue: 0
    }

    constructor() { }

    /**
     * metodo responsavel por realizar a simulacao do emprestimo e retornar o resultado
     * 
     * @param customerData dados preenchidos pelo usuario
     * 
     * @returns proposta do emprestimo solicitado
     */
    public simulateLending(customerData: any): Observable<Proposal> {
        this.customerData = customerData;
        const proposal: Proposal = {
            proposalValue: customerData.proposalValue,
            fullName: customerData.fullName,
            installmentValue: this.getInstallmentsValue(),
            amountWithInterest: this.getAmountWithInterest(),
            installments: customerData.installments
        }

        this.proposal = proposal;
        return of(proposal);
    }

    /**
       * metodo responsavel por recuperar o valor das parcelas
       * baseado no total do emprestimo solicitado e a quantidade
       * de parcelas informada pelo cliente 
       * 
       * @returns valor das parcelas
       */
    private getInstallmentsValue(): number {
        return this.customerData.proposalValue / this.customerData.installments;
    }

    /**
     * metodo responsavel por recuperar o valor total do emprestimo + juros
     * 
     * considerando 5% de juros sobre o valor do emprestimo
     * 
     * @returns valor total do emprestimo + juros
     */
    private getAmountWithInterest(): number {
        return this.customerData.proposalValue + (this.customerData.proposalValue * 5) / 100;
    }
    
    public getProposal(): Proposal {
        return this.proposal;
    }
}

