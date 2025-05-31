const vehicle={
    car:["bmw","audi","hundai"],
    brand:"bmw5",
    color:"White",
    prize:10000000000,

    showDetails(){
        this.car.forEach(function (cars) {
            console.log(cars)
        })

    }
}
vehicle.showDetails()