// Skip to main content
// Google Classroom's 10th anniversary logo featuring a party hat and animated balloons
// Classroom
// SMIT-PAP-B12-6PM_8PM
// 6PM_8PM
// Home
// Calendar
// Teaching
// To review
// W
// WEBSITE DEVELOP
// A
// Enrolled
// To-do
// S
// SMIT-PAP-B12-6PM_8PM
// 6PM_8PM
// W
// Web Development Crash Course
// Online
// Archived classes
// Settings
// Stream
// Classwork
// People
// Classwork for SMIT-PAP-B12-6PM_8PM 6PM_8PM
// All topics
// JavaScript
// JavaScript
// Material
// functions in JS
// Posted Yesterday
// Material
// Data Modelling
// Posted Sep 16
// Material
// non primitives data types and loops
// Posted Sep 13
// Material
// comparison operator and array intro
// Posted Sep 11
// Material
// Basics of JS
// Posted Sep 9
// JavaScript Assignment
// JavaScript Assignment
// Assignment
// Assignment-03
// No due date
// Posted Yesterday
// Assigned

// exercise.js
// Javascript
// Completed Assignment
// Assignment-2
// No due date
// Completed Assignment
// Assignment-1
// No due date
// Hackathon
// Hackathon
// Completed Assignment
// Hackathon Project
// 11
// 11 comments
// No due date
// Classwork
// Classwork
// Material
// Landing page code
// 2
// 2 comments
// Posted Aug 7
// Material
// Class-13
// 1
// 1 comment
// Posted Jul 1
// Material
// Class-12
// Posted Jun 28
// Material
// Class 09-11
// Posted Jun 24
// Material
// Class-08
// Posted Jun 12
// Material
// Class-07
// Posted Jun 10
// Material
// Classes 4 to 6
// Posted Jun 8
// Material
// Classes 1 to 3
// Edited Jun 3
// HTML Assignment
// HTML Assignment
// Completed Assignment
// Assignment-12
// No due date
// Completed Assignment
// Assignment-11
// 2
// 2 comments
// No due date
// Completed Assignment
// Assignment-10
// Due Aug 5
// Completed Assignment
// Assignment-09
// No due date
// Completed Assignment
// Assignment-08
// No due date
// Completed Assignment
// Assignment-07
// No due date
// Completed Assignment
// Assignment-06
// No due date
// Completed Assignment
// Assignment-05
// No due date
// Completed Assignment
// Assignment-04
// No due date
// Completed Assignment
// Assignment-03
// Due Jun 10
let products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 52000, quantity: 3 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
      { id: 4, color: "white", price: 54000, quantity: 4 },
      { id: 5, color: "blue", price: 51000, quantity: 2 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "Zubair: It is a very good product ....",
        date: "05-02-2021",
        status: true,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "Excellent Product",
        comments: "Ali: I absolutely love it!",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "orange", price: 48000, quantity: 6 },
      { id: 3, color: "green", price: 55000, quantity: 8 },
      { id: 4, color: "purple", price: 53000, quantity: 3 },
      { id: 5, color: "gold", price: 59000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 4.5,
        title: "Very Good Product",
        comments: "Zubair: It is a very good product ....",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 5.0,
        title: "Best Mobile",
        comments: "Ali: Perfect for my needs!",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 103,
    title: "Bike",
    variations: [
      { id: 1, color: "black", price: 55000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "blue", price: 58000, quantity: 4 },
      { id: 4, color: "green", price: 57000, quantity: 2 },
      { id: 5, color: "yellow", price: 59000, quantity: 3 },
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad",
        rating: 4.0,
        title: "Good Product",
        comments: "It is a very good product ....",
        date: "06-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Zubair",
        rating: 3.0,
        title: "Decent Product",
        comments: "Zubair: It's okay, but could be better.",
        date: "05-02-2021",
        status: false,
      },
      {
        id: 3,
        user: "Ali",
        rating: 4.5,
        title: "Great Bike",
        comments: "Ali: Fantastic experience riding it!",
        date: "04-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 104,
    title: "Laptop",
    variations: [
      { id: 1, color: "black", price: 70000, quantity: 5 },
      { id: 2, color: "silver", price: 75000, quantity: 2 },
      { id: 3, color: "white", price: 72000, quantity: 3 },
      { id: 4, color: "blue", price: 68000, quantity: 4 },
      { id: 5, color: "red", price: 73000, quantity: 1 },
    ],
    reviews: [
      {
        id: 1,
        user: "Sara",
        rating: 4.5,
        title: "Great Laptop",
        comments: "Sara: Works perfectly for my needs.",
        date: "08-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Owais",
        rating: 4.0,
        title: "Good Performance",
        comments: "Owais: Solid performance and battery life.",
        date: "07-02-2021",
        status: true,
      },
      {
        id: 3,
        user: "Fatima",
        rating: 5.0,
        title: "Best Purchase",
        comments: "Fatima: Highly recommend!",
        date: "06-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 105,
    title: "Smartwatch",
    variations: [
      { id: 1, color: "black", price: 15000, quantity: 10 },
      { id: 2, color: "silver", price: 16000, quantity: 5 },
      { id: 3, color: "gold", price: 18000, quantity: 2 },
      { id: 4, color: "rose", price: 17000, quantity: 3 },
      { id: 5, color: "blue", price: 15500, quantity: 8 },
    ],
    reviews: [
      {
        id: 1,
        user: "Muneeb",
        rating: 4.0,
        title: "Good Smartwatch",
        comments: "Muneeb: Great features for the price.",
        date: "09-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Nadia",
        rating: 4.5,
        title: "Very Useful",
        comments: "Nadia: Love tracking my workouts!",
        date: "08-02-2021",
        status: true,
      },
      {
        id: 3,
        user: "Ali",
        rating: 4.8,
        title: "Awesome",
        comments: "Ali: Best smartwatch I've owned!",
        date: "07-02-2021",
        status: true,
      },
    ],
  },
  {
    id: 106,
    title: "Headphones",
    variations: [
      { id: 1, color: "black", price: 3000, quantity: 15 },
      { id: 2, color: "white", price: 3500, quantity: 10 },
      { id: 3, color: "red", price: 3200, quantity: 5 },
      { id: 4, color: "blue", price: 3400, quantity: 8 },
      { id: 5, color: "green", price: 3100, quantity: 12 },
    ],
    reviews: [
      {
        id: 1,
        user: "Samira",
        rating: 4.2,
        title: "Great Sound",
        comments: "Samira: The sound quality is impressive.",
        date: "10-02-2021",
        status: true,
      },
      {
        id: 2,
        user: "Tariq",
        rating: 4.0,
        title: "Good for the Price",
        comments: "Tariq: Comfortable and decent sound.",
        date: "09-02-2021",
        status: true,
      },
      {
        id: 3,
        user: "Zara",
        rating: 4.7,
        title: "Love Them!",
        comments: "Zara: Best headphones for my workouts.",
        date: "08-02-2021",
        status: true,
      },
    ],
  },
];

// Exercise 1
// Get all product titles and display them in array format.
// Example: ['Sony LED 40 inch', 'Mobile', 'Bike']
// Try with function or without function

let array = []
for(let i = 0; i < products.length; i++){
    array.push(products[i].title)
}
console.log(array)

// function array() {
//     for(let i = 0; i < products.length; i++){
//         array.push(products[i].title)}
// }

// console.log(array())

// ---------------------------------------------

// Exercise 2
// Get all the unique colors from the product variations.
// Example: ['black', 'red', 'silver']
// Try with function or without function

let colour = []

function getuniqecolor(products){
  for(let i = 0; i < products.length; i++){
    for(let j = 0; j < products[i].variations.length; j++){
      let color = products[i].variations[j].color
      if(colour.indexOf(color) === -1){
        colour.push(color)
      }
    }
  }
}
console.log(getuniqecolor)



// Exercise 3
// Get the total quantity of all products.
// Example: 23
// Try with function or without function

// console.log(products.length)

function product(){
    console.log(products.length)
}
product()

// Exercise 4
// Get all product reviews where the status is true.
// Example: [{ review1 }, { review3 }, ...]
// Try with function or without function

let reviews = []

function getTheTrueReview(products){
  for(let i = 0; i < products.length; i++){
    for(let j = 0; j < products[i].reviews.length; j++){
      let reviewsss = products[i].reviews[j];
      let valu = false
      if(products.reviews.status === true){
        reviews.push(products.reviews)
      }
    }
  }
}
console.log(reviews)
// Exercise 5
// Find the most expensive variation across all products.
// Example: { color: 'silver', price: 55000 }
// Try with function or without function

function mostexpensivevariation(products) {
  let variations = null
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products[i].variations.length; j++) {
      let variation = products[i].variations[j];
      if (variations == null||variation.price > variations.price) {
        variations=variation;
      }}}}



// Exercise 6
// Get the average rating of all reviews.
// Example: 4.2
for (let i = 0; i < products.length; i++) {
    let sum = 0;
    for (let j = 0; j < products[b].reviews.length; j++) {
      sum += products[b].reviews[j].rating;
    }let avgRating = sum / products[b].reviews.length;
}
console.log("Product " + products[b].id + " = " + avgRating + "(" + products[b].reviews.length + ")");

// Exercise 7
// find a Product by id if not found return empty object
// Example: {...}

function getProductById(products, productId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      return products[i];
    }
    console.log(getProductById(products, 101))
  }}



