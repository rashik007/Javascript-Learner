'use strict';


//multiple structure with same instance
function Cat(name, color) {
    this.name = name,
    this.color = color
}

var cat  = new Cat('fluff', 'cat');
var dog = new Cat('brown', 'dog')

// display(cat);
// display(dog);

//class structure
class Caat {
    constructor(name, color) {
        this.name = 'fluff',
        this.color = 'browmn'
    }


    speak() {
        display('\neeljssf');
    }
}

var caat = new Caat('fluff', 'white');
// display(caat)
caat.speak()

display(object.getOwnPropertyDescriptor(cat, 'name'))


