// 1.   Create an array that contains two of your favorite things to do

const favThings = ["Gaming", "Swimming"]

console.log(favThings)

// 2.   Using an array method, add another thing you like to do to that list

favThings.push("Sleeping")

console.log(favThings)

// 3.   Reverse the order of the array (remember, if needed use MDN)

favThings.reverse()

console.log(favThings)

//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const daysOfWk = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

console.log(daysOfWk)
// 4.   log the length of the array

console.log(daysOfWk.length)

// 5.   log the 4th element in the array

console.log(daysOfWk[3])

// 6.   Remove the first element in the array. Log the new array and the element removed from the array

let firstEl = daysOfWk.shift()

console.log(firstEl)
// 7.   Put 'Sunday' back at the beginning of the array and log the new array

daysOfWk.unshift('Sunday')

console.log(daysOfWk)

// 8.   Remove the last element in the array. Log the new array and log the element removed

const removedLastEl = daysOfWk.pop()

console.log(removedLastEl)
// 9.   Add 'Saturday' back to the end of the array and log the new array

console.log(daysOfWk.unshift(removedLastEl))

//10.   Replace 'Thursday' with 'Friday Junior'

console.log(daysOfWk.splice(5, 1, 'Friday Junior'))


//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'

let favDay = 'My favorite day of the week is'

let favDay1 = favDay.push(`${daysOfWk[5]}`)

console.log(favDay1)

//12.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']

console.log(phone.concat(laptop))

//13.   Write a line of code to test if something is an array or not

console.log(Array.isArray(daysOfWk))