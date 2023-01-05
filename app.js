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
const person = {
    name: 'Kertu',
    age : 25
}

// Toob objekti väärtused eraldi
console.log(person)
console.log(person.name)
console.log(person.age)

// Funktsioon const'ina
const multiply = (number) => {
    return number * number
}

// Numbrile antakse väärtus 2
console.log(multiply(2))