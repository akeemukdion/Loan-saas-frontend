
// let date = Date.parse(' May 11,2014');
var today:any = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

export const allLoans = [
    {name:"Ajanlenkoko Francis",
    statusBadge:"processing",
    loanType:"UKD-Staff loan",
    amount:230000,
    branch:"Ikeja",
    createdBy:"Akeem",
    createdDate:today},
    {name:"mathew Francis",
    statusBadge:"rejected",
    loanType:"UKD-Staff loan",
    amount:230000,
    branch:"Ikeja",
    createdBy:"Akeem",
    createdDate:today},
    {name:"Osaro Francis",
    statusBadge:"processing",
    loanType:"UKD-Staff loan",
    amount:230000,
    branch:"Ikeja",
    createdBy:"Akeem",
    createdDate:today},
    {name:"CTO Francis",
    statusBadge:"review",
    loanType:"DEFT",
    amount:230000,
    branch:"Ikeja",
    createdBy:"Akeem",
    createdDate:today},
    {name:"Mummy G.O",
    statusBadge:"processing",
    loanType:"UKD-Staff loan",
    amount:230000,
    branch:"Ikeja",
    createdBy:"Akeem",
    createdDate:today},
]