//PART1

// const obj1 = {
//     rocket: 'R1',
//     fuel: 2,
//     config: {
//         name: 'mars'
//     }
// }

// obj1.fuel = 200;
// console.log(obj1);
//We can moify the object even if it is declared as a const because the object is located under different memory location and literals are under different memory loaction.

//PART 2 - Another syntax of creating object

// const obj2 = new Object()     //Constructor
// obj2.Fuel = 500;
// obj2.name = 'Purvi'
// console.log(obj2);

//PART 3
//This syntax is not generally user, it will be used when we want to copy an existing syntax or  if we want to inherite properties from one object to another object
// const powers = {
//     fly: true,
//     coordinate: Math.random() + 2
// }

// const obj3 = Object.create(powers);
// console.log(obj3);
// console.log(obj3.fly);
// console.log(obj3.coordinate);
// console.log(Object.getPrototypeOf(obj3));

//PART 4
//Another method to insert values inside empty object
// const obj4 = Object.create({});
// //To insert values using defineProperty we cannot normally indert values we need to use get/set methods.
// Object.defineProperty(obj4, 'bookname', {
//         get : () => 'abcde',
//         enumerable: true
// })
// console.log(obj4);
// console.log(obj4.bookname);
//Define property is used to insert properties into the object but not normal properties but the properties which we can cantrol them.

//If we want to loop all the values from obj4.
// for (k in obj4){
//     console.log('value of k is:', k);
// }
//Not all the objects can be loop through so if we want to restrict someone from looping through our objects  then we will use this method to define and insert forobject.
//Here we need to on the enumerale flag to loop through the object

//PART5
//There are two methods for defining function -
//1. Normal function  - let sum = function(){}
//2. Arrow method -  let sum = () => {}

//There is a scenerio -  if there are multiple places,same variable name ws used so how to define and use the variable which was present in our object.

// let add = 2+3 ;

// const obj5 = {
//     sum : 'add two numbers',
//     add : 6+7 ,
//     printresult: function (){
//         add: 2+2;
//     },
// }

//This will not work because we are too nested in the loop, if we want to update the value of add inside our object then we have to use 'this' keyword

const display = 'Purvi' ;

const obj5 = {
    Namediaplay : 'Diaplay name',
    display : 'Gangrade' ,
    printresult: function (){
        this.display +=  'Purvigangarde',
        console.log('Value of:',this);
    },
}
const obje5 = {
    comics : 'marvel',
    pen: '',
    printComic: function(){
        this.pen += '🖊️🗒️'
        console.log(this);
        return this;
    },
    // printaComic: () => {
    //     // this.pen += '🖊️🗒️'
    //     console.log(this);

    // },
    
}
