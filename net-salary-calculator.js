//calculates the salary after user input of nhif,nssf and paye
function calculateNetSalary() {
    const prompt = require("prompt-sync")()
    let basicSalary = prompt("Enter basic salary: ")
    let benefits = prompt("Enter benefits amount: ")
    grossSalary = basicSalary + benefits

    //calculation of Paye
    let paye = 0 
    if (grossSalary >0 && grossSalary <= 24000) {
        paye = 0.1
    }else if (grossSalary >24001 && grossSalary < 32333) {
        (grossSalary * 0.1) + ((32333-24000) * 0.25)
    }else if (grossSalary > 32333){
        (grossSalary * 0.1) + ((32333-24000) * 0.25) + ((grossSalary-32333) * 0.3)
    }

    //calculation of Nhif
    let nhif = 0

    if (grossSalary <= 5999) {
        nhif = 200
    }else if (grossSalary >6000 && grossSalary <=7999) {
        nhif = 300
    }else if (grossSalary >= 8000 && grossSalary <=11999) {
        nhif = 400
    }else if (grossSalary >=12000 && grossSalary <=14999) {
        nhif = 500
    }else if (grossSalary >=15000 && grossSalary <=19999) {
        nhif = 600
    }else if (grossSalary >=20000 && grossSalary <=24999) {
        nhif = 750
    }else if (grossSalary >=25000 && grossSalary <=29999) {
        nhif = 850
    }else if (grossSalary >=30000 && grossSalary <=34999) {
        nhif = 900
    }else if (grossSalary >=35000 && grossSalary <=39999) {
        nhif = 950
    }else if (grossSalary >=40000 && grossSalary <=44999) {
        nhif = 1000
    }else if (grossSalary >=45000 && grossSalary <=49999) {
        nhif = 1100
    }else if (grossSalary >=50000 && grossSalary <=59999) {
        nhif = 1200
    }else if (grossSalary >=60000 && grossSalary <=69999){
        nhif = 1300
    }else if (grossSalary >=70000 && grossSalary <=79999) {
        nhif = 1400
    }else if (grossSalary >=80000 && grossSalary <=89999) {
        nhif = 1500
    }else if (grossSalary >=90000 && grossSalary <=99999) {
        nhif = 1600
    }else if (grossSalary >100000) {
        nhif = 1700
    }

    //calculation of nssf 
    let nssf = 0
     if (grossSalary < 18000){
        nssf = 0.06
     }else if (grossSalary > 18000) {
        nssf = (18000 * 0.06)
     }else {
        'invalid';
     }

     const netPay = grossSalary-(nhif + nssf + paye)
     console.log(netPay);
}calculateNetSalary()