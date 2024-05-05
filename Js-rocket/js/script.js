var DoCoolStuff = function () {
    var currentClassName = document.get
        ElementById('cool').className;

        if (currentClassName == 'cool') {
            document.getElementById('cool').className = 'cool red';
        } else {
            document.getElementById('cool').className = 'cool';
        }
    
        
}
var sayMyName = function (name)  {
        alert('My name is: '+name);
}
           
var car = {
    made: 'VW',
    type: 'polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
        'seat 1',
        'seat 2',
        'seat 3',
        'seat 4'
    ],
    turnOn: function () {
        this.isTurnedOn = true;
    },
    fly: function () {
        alert('fly');
    },
    switchCar: function (isOn) {
        console.log('turn car' + isOn);
        if (isOn === true) {
            this.inTurnedon = true;
        } else {
            this.isTurnedOn = false;
        }
    }
};

console.log('hello there friends!');