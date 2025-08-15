//class person{
//     constructor(fName, lName, Age) {
//         this.fName = fName;
//         this.lName = lName;
//         this.Age = Age;
 //     }
    //     fullName(){
    //         return `${this.fName}, your full name is ${this.fName} ${this.lName}.`
    //     }
    // }
    
    // var friend1 = new person("Estelle", "Bertille", 20);
    // var friend2 = new person("Ache", "william", 23);
    
    // console.log(friend1,friend2);
    
    // console.log(friend1.fName, "And" , friend2.fName, "are my friends and they are " ,friend1.Age ,"and", friend2.Age, "year old")
    
    // let fn = friend2.fullName();
    // console.log(fn);
    
    class inventory {
        #Id;
        #model;
        constructor(model, price, quantity, Id){
            this.#model = model;
            this.price = price;
            this.quantity = quantity;
            this.#Id = Id;
    
        }
        // get Id() {
        //     return this.#Id;
        // }
    
        // set Id(Id){
        //     this.#Id = Id;
        // }
    
    
        
    
        
    }
    
    // let i1, i2, i3;
    
    // i1 = new inventory("venusia","$1000","12","100");
    
    // console.log(i1.Id);
    
    // i1.Id = "20";
    // console.log(i1.Id);
    
    class vehicle{
        constructor(color, currentspeed, maximumspeed) {
            this.color = color;
            this.currentspeed = currentspeed;
            this.maximumspeed = maximumspeed;
    
        }
        move() {
            console.log(" the vehicle is moving at", this.currentspeed + "km/h");
        }
        accelerate(amount) {
            this.currentspeed += amount;
            console.log("the vehicle is accelerting at", this.currentspeed + "km/h");
        }
    }
    // this is another class called child class because of the keyword extends. this gives the child class the xtics of the parent class. this phenomenon is known as inheritance
    class motocycle extends vehicle {
        constructor(color, currentspeed, maximumspeed, fuel){
            super(color, currentspeed, maximumspeed)
            this.fuel = fuel;
    
        }
        /* this is called polymophism i.e overwriting the method of the parent  inside the child's class.
        on normal basis, the child can have access to all the methods define in the parent, but if we need to modify it so as to suit the child, we go in for polymophysm.*/
        move() {
            console.log("Motor is moving at", this.currentspeed + "km/h");
        }
    
        accelerate(amount) {
            this.currentspeed += amount;
            console.log("the Motor is accelerting at", this.currentspeed + "km/h");
        }
        
    
    }
    
    let ver = new vehicle("red",20,350);
    console.log(ver);
    
    let motor = new motocycle("green", 30, 350, "methol");
    console.log(motor);
    
    motor.move();
    motor.accelerate(30);
    /* here we are using the prototype property to add more methods or properties to the existing class vehicle
    and as you can see, any instances oc that class including it child, can have access to this method or property as if they were created in the class creation */
    vehicle.prototype.introduce = () => {
        console.log("Hi, I'm moving at " ,this.currentspeed + "km/h");
    
    };
    vehicle.prototype.numofWheel = 4;
    console.log(ver);
    ver.introduce();
    motor.introduce();
    
    motor.numofWheel = 2;
    console.log(motor);
    