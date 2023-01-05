/*
// CONST & LET
// length (mitu elementi arrays on)
const numbers = [1,2,3]

console.log(numbers.length)

// For Each Loop
// Variant function sõnaga
numbers.forEach(function(number){
    console.log(number)
})

// Arrow function (teeb sama, mis eelmine, aga ilma function sõnata)
numbers.forEach((number) => {
    console.log(number)
})

// Objekt
/!*
const person = {
    name: 'Kertu',
    age : 25
}
*!/

// Toob objekti väärtused eraldi
console.log(person)
console.log(person.name)
console.log(person.age)


//FUNKTSIOONID
// Funktsioon const'ina
const multiply = (number) => {
    return number * number
}

// Numbrile antakse väärtus 2
console.log(multiply(2))

// sulgude sees olev on argument, kui tahad kasutada nullväärtust tuleb jätta '()'. Kui väärtus 0lemas võib kasutada ka ilma sulgudeta
const callMe = name => {
    return name
}

// Lühemalt saab ka nii
const returnMe = name => name
console.log(returnMe('Hanna'))

//IMPORT
import person from "./person.js";
import {data} from "./utils.js"
import {cleanOutput as clean} from "./utils.js";

// IMPORT terve fail uue nimega
import * as utils from "./utils.js"

console.log(data)
clean()

*/

//CLASSES
/*
class Human {
    gender = 'male'

    printGender(){
        console.log(this.gender)
    }
}

class Person extends Human {
    constructor() {
        super();
    }
    printName(){
        console.log(this.name)
    }
}

const person = new Person()
console.log(person)
person.printName()
*/
