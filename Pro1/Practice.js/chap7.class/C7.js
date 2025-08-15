// OOP implementation in JavaScript. this is a class vehicle that represents a real world entity( in this case a vehicle)

class Vehicle {
    /* here we are limiting the accessibility of our properties, making it accessible only withing it class
    in this way, we are controling how to access and modify it through getters and setters. it known as encapsulation*/
    #color;
    #currentspeed;
    #maxspeed;

    constructor(col,CS,MS){
        this.#color = col;
        this.#currentspeed = CS;
        this.#maxspeed = MS;
    }
    /* defination of some getters and setters
    getters : give access to a preperty's value indirectly
    setters : helps modify a property's value */
    get col() {
        return this.#color;
    }
    set col(newCol) {
        this.#color = newCol;
    }

    get cSpeed() {
        return this.#currentspeed;
    }

    get MSpeed() {
        return this.#maxspeed;
    }

    move (){
        if(this.#currentspeed > 0){
            console.log("This Vehicle is moving at " + this.#currentspeed + "Km/h");
        }else {
            console.log("This vehicle is Stationary");
        }
        
    }

    accelerate(amount) {
        this.#currentspeed += amount;
        if(this.#currentspeed > this.#maxspeed){
            this.#currentspeed = this.#maxspeed;
        }
    }

    decelerate(amount) {
        if(amount > this.#currentspeed){
            this.#currentspeed = 0;
            return;
        }
        this.#currentspeed -= amount;
    }

}

class motocycle extends vehicle {

    #feul;

    constructor(col,cS,mS,fL){
        super(col,cS,mS);
        this.#feul = fL;
    }

    myState() {
        console.log(`am a Motocycle, i use ${this.#feul} as fuel, my current speed is ${this.cSpeed} and my color is ${this.col} and my maximum speed is ${this.MSpeed}`);
    }
}