class Car {
    mileage = 0;
    price = 100;
    color ='white';

    drive() {
        return 'drive';
    }

    break() {
        return 'break';
    }
}

class Ford extends Car {

}

const myFordCar = new Ford();
myFordCar.drive();
myFordCar.break();

interface Part { 
    seats: number;
    tire: number;
}

class Ford2 implements Car, Part {
    mileage = 1;
    price = 2;
    color = 'white';
    seats = 4;
    tire = 4;

    drive() {
        return 'ford2 drive';
    }

    break() {
        return 'ford2 break';
    }
}

const myFordCar2 = new Ford2();
myFordCar2.drive();
myFordCar2.break();




