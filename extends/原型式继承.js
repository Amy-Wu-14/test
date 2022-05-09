
let person = {
    name: "Nicholas",
    friends: ['1', '2']
}
let anotherPerson = Object.create(person, {
    name: {
        value: "Greg"
    }
})
anotherPerson.friends.push('0')
console.log(anotherPerson.name) //Greg
let newPerson = Object.create(person)
console.log(anotherPerson.friends)  //[ '1', '2', '0' ]
