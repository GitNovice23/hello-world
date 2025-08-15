class employee{
    constructor(fName, lName, NOE){
        this.fName = fName;
        this.lName = lName;
        this.NOE = NOE;
    }
}

var emp1, emp2, emp3;
emp1 = new employee("James", "Smith", 25);
emp2 = new employee("Aron", "Wick", 12);
emp3 = new employee("Julia", "Anderson", 12);
var ary = [emp1,emp2,emp3];

employee.prototype.emp_infor = function (){
    let message = `The Employee  Mr/Miss ${this.fName} ${this.lName}, has worked for ${this.NOE} years in our company`;
    return message;
}

console.log("employee details :");
for( let employees of ary){
    console.log(employees.emp_infor());
}
