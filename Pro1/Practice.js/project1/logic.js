class Bank {
    #accountName
    #accountNumber
    #balance

    constructor(num,NetAmt = 0, name){
        this.#accountNumber = num;
        this.#balance = NetAmt;
        this.#accountName = name;
    }

    // using getters and setters to access acount name only within the class
    get name() {
        return this.#accountName;
    }

    set name(N){ 
        this.#accountName = N;
    }
    // ends here for acount name 

    //for account number
    get num() {
        return this.#accountNumber;
    }

    set num(n1){ 
        this.#accountNumber = n1;
    }
    // end here 

    // account amount
    get AMT(){
        return this.#balance;
    }
    
    set AMT(amt) {
        this.#balance += amt;
    }

    set AMT2(amt2){
        this.#balance -= amt2;
    }

    checknum(){
        let inv; 

        let num = parseInt(prompt("Enter your account Number: "));

        while(Number.isNaN(num)){
            num = parseInt(prompt("Please Enter a Valid  account Number: "));
        }

        if(num === this.num){
            inv = true;
        }else{
            inv = false;
        }

        return inv;

    }

    deposit(){

        if(this.checknum()){

            let amt = parseFloat(prompt("Enter the amount you wish to deposit: "));

            while(Number.isNaN(amt)){
                amt = parseFloat(prompt("Please Enter  amount you wish to deposit: "));
            }

            this.AMT = amt;

            alert(`Dear ${this.name}, you have successfully deposited ${amt} FCFA, your new Acoount Balance is : ${this.AMT} FCFA`);
        }else{
            alert("Invalid INput");
        }
        
        return;
    }

    balance(){

        if(this.checknum()){
            alert(`Dear ${this.name}, your current Balance is: ${this.AMT}`);
        }else{
            alert("Invalid Input");
        }

        return;
    }

    withdraw() {
        
        if(this.checknum()){
            let amt2 = parseFloat(prompt("Enter the amount you wish to Withdraw:  "));

            while(Number.isNaN(amt2)){
                amt2 = parseFloat(prompt("Please Enter  amount you wish to deposit: "));
            }

            if(amt2 <= this.AMT){
                this.AMT2 = amt2;
                alert(`Dear ${this.name}, you have successfully widthraw ${amt2} FCFA, your new Acoount Balance is : ${this.AMT} FCFA`);
            }else{
                alert("Insufficient Amount in your account ");
            }
        
        }else{
            alert("Invalid Input");
        }

        return;
    }


}


const form = document.querySelector(".child2");
const top = document.querySelector(".top");
const option = document.getElementById("option");
const mgs = document.querySelector(".mgs");
let bankAccount = null;

function validateOption(value) {
    const num = Number(value);
    return num >= 1 && num <= 4;
}

function showMessage(msg) {
    mgs.innerText = msg;
}

function clearMessage() {
    mgs.innerText = "";
}

function showForm() {
    form.style.display = "block";
}

function hideForm() {
    form.style.display = "none";
}

function clearForm() {
    form.querySelector("#op1").value = "";
    form.querySelector("#op2").value = "";
}

function getAccountName() {
    return form.querySelector("#op1").value.trim();
}

function getPassword() {
    return form.querySelector("#op2").value.trim();
}

function createAccount() {
    const name = getAccountName();
    const pw = getPassword();
    if (!name || !pw) {
        showMessage("Please enter both Account Name and Password.");
        return false;
    }
    
    bankAccount = new Bank(pw, 0, name);
    showMessage(`Account created successfully! Your account number is ${accNum}`);
    hideForm();
    return true;
}

function depositMoney() {
    if (!bankAccount) {
        showMessage("No account found. Please create an account first.");
        return;
    }
    if (!bankAccount.checknum()) {
        showMessage("Invalid account number.");
        return;
    }
    bankAccount.deposit();
}

function withdrawMoney() {
    if (!bankAccount) {
        showMessage("No account found. Please create an account first.");
        return;
    }
    if (!bankAccount.checknum()) {
        showMessage("Invalid account number.");
        return;
    }
    bankAccount.withdraw();
}

function checkBalance() {
    if (!bankAccount) {
        showMessage("No account found. Please create an account first.");
        return;
    }
    if (!bankAccount.checknum()) {
        showMessage("Invalid account number.");
        return;
    }
    bankAccount.balance();
}

function handleOption() {
    clearMessage();
    const val = option.value.trim();
    if (!validateOption(val)) {
        showMessage("Invalid input, please enter a number between 1 and 4.");
        return;
    }
    const choice = Number(val);
    switch (choice) {
        case 1:
            showForm();
            clearMessage();
            break;
        case 2:
            depositMoney();
            break;
        case 3:
            withdrawMoney();
            break;
        case 4:
            checkBalance();
            break;
        default:
            showMessage("Invalid option.");
    }
}

document.querySelector(".btn2").addEventListener("click", () => {
    handleOption();
});

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    if (createAccount()) {
        clearForm();
    }
});

hideForm();



