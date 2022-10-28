//creación de la clase padre
class Vehicle{
    constructor(){
        this._run = "run";
        this._stop = "stop";
        this._name = "vehicle";
        this._action = "action";
    }

    get run(){
        return `${this._run} ${this._name}`; 
    }

    get stop(){
        return `${this._stop} ${this._name}`;
    }
    
    get action(){
        return `${this._name} ${this._action}`;
    }
}
//Hijos con datos distintos
class Plane extends Vehicle{
    constructor(){
        super();
        this._name = "the plane";
        this._action = "fly";
    }
}

class Car extends Vehicle{
    constructor(){
        super();
        this._name = "the car";
        this._action = "drive";
    }
}

class Train extends Vehicle{
    constructor(){
        super();
        this._name = "the train";
        this._action = "travel";
    }
}

let tren = new Train();
console.log(tren.action);
console.log(tren.run);