export interface Proposal {
    fullName?: string; // nome completo do cliente
    proposalValue: number; // valor do emprestimo solicitado
    amountWithInterest?: number; // valor do emprestimo com juros
    installments: number; // quantidade de parcelas
    installmentValue?: number; // valor das parcelas
}