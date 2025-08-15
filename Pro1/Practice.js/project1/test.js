class students {
    #ID;
    stud_Name;
    stud_age;
    stud_sex;
    #DOP;
    stud_class;

    constructor(id, name, age, sex, dop, level){
        this.#ID = id;
        this.stud_Name = name;
        this.stud_age = age;
        this.#DOP = dop;
        this.stud_class;
    }

    get id(){
        return this.#ID;
    }

    get dop(){
        return this.#DOP;
    }

    set id(uni){
        this.#ID = uni;
    }

    set dop(d){
    
        this.#DOP = d;
    }
}
// let obj = new students(10,"Adam Smith", 17, "M", '12/10/2017', "BA1C");

// console.log(obj.stud_Name);

// obj.date = "16/12/2005";
// console.log(obj.date);



var user1 = new Bank(19811,10,"SHunwikong Mark");
console.log(user1.name);

console.log(user1.num)
;




user1.balance();

user1.deposit();

user1.withdraw();