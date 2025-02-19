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

class Ford2 implements Car {
    mileage = 1;
    price = 2;
    color = 'white';

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

