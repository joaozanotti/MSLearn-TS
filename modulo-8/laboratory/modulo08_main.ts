/*  Module 8: Organize code using TypeScript namespaces  */

/*  Laboratory  */

/*  TODO Create a the Loans namespace. */

/*  TODO Create LoanPrograms namespace. */

/*  TODO Add reference paths. */

/// <reference path="modulo08_loans.ts"/>
/// <reference path="modulo08_loan-programs.ts"/>

/*  TODO Update the function calls. */

let interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);         //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     //* Returns "The conventional loan payment is 237.24"
