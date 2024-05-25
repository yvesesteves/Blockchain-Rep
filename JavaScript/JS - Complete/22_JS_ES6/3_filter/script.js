// 3 - filter
const arr = [1,2,3,4,5]
console.log(arr)

const highNumbers = arr.filter((n) => {
    if(n >= 3){
        return n
    }
})

console.log(highNumbers)

const users = [
    { name: 'Yves', available: true}, 
    { name: 'Pedro', available: false}, 
    { name: 'Lucas', available: false}, 
    { name: 'Marcos', available: true}, 
]

const availableUsers = user.filter((user) => user.available)
const notAvailableUsers = user.filter((user) => !user.available)

console.log(availableUsers)
console.log(notAvailableUsers)

