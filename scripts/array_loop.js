console.log('We are here')

// document.body.innerHTML = 'hello world'
 
/// Arrays are written with square bracket, it is used to group related items together
const new_array = ['num1','num2','num3']
console.log(new_array[0])
const display_array = document.getElementById('array_item')
const handleClick =()=>{
  display_array.innerHTML= `${new_array[1] = 'hey'}`
}

//// Accessing individual content of an array using indexing
const myArray =new_array[1]
console.log(myArray)

///Changing the value of an array
new_array[1] = 'Ebube' /// num2 at index of 2 in new_array is changed to 'Ebube'
console.log(new_array)


///To check if something is an array we use 'Array.isArray(pass what we want to check)'
console.log(Array.isArray(new_array)) // true ecause new_array is an array.


/// To access the length of an array we use '.length' property

console.log(new_array.length) // the length of the array is 3.

/// To add a new value to the end of an array we use '.push()' method

new_array.push('Chisom')
console.log(new_array) // ['num1', 'Ebube', 'num3', 'Chisom']

//// To remove the first item of an array we use '.shift()' method
new_array.shift('Hello')
console.log(new_array) //  ['Ebube', 'num3', 'Chisom']


//// To Add an item to the first item of an array we use '.unshift()' method
new_array.unshift('Hello')
console.log(new_array)

//// You can also remove an item from an arrary using the '.splice(a,b)' method,
//a === index we want to start removing item from the array
//b === number of item we want to remove starting at index of '

console.log(new_array.splice(1,2)) /// ['Ebube', 'num3'] is the item we just removed

