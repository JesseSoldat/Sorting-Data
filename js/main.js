//01--------------------------------------
// (function() {
//  // items.forEach(function(item){
//  // console.log(item.price);
//  // })
// //create an array of the prices
//   var prices = items.map(function(item){
//     return item.price ;
//   });
//   console.log(prices);
//   //add all the prices together 
//   var sum = prices.reduce(function(prev,next){
//     return prev + next;
//   });
//   console.log(sum);
//   var avg = sum / items.length;
//   //convert it to 2 decimal places
//   var converted = avg.toFixed(2);
//   console.log(converted);
//   //make it a string
//   var string = "The average price is $" +converted;
//   console.log(string);

//   var answer1 = document.querySelector('#answer1');
//   var textNode = document.createTextNode(string);

//   answer1.appendChild(textNode);
// })();
// 02-----------------------------------------
// (function() {
// var priceArray = [];

//   //collect the items that cost more than $14
//   items.filter(function(value){
//     //get price
//     if (value.price > 14 && value.price < 18)
//     {
//       priceArray.push(value.title);
//     } //end of if

//   }) //end of filter
//    var string = priceArray.join(",")
//    var string3 = priceArray.pop();
//    var string2 = priceArray.pop();
//    var string1 = priceArray.pop();

//     var answerA = string1;
//     var answerB = string2;
//     var answerC = string3;

// //A
//   var answer2A = document.querySelector('#answer2A');
//   var textNode = document.createTextNode(answerA);
//   answer2A.appendChild(textNode);

// //B  
//   var answer2B = document.querySelector('#answer2B');
//   var textNode = document.createTextNode(answerB);
//   answer2B.appendChild(textNode);

// // //C
//   var answer2C = document.querySelector('#answer2C');
//   var textNode = document.createTextNode(answerC);
//   answer2C.appendChild(textNode);

//   })(); //end of self executing function
// 03---------------------------------------
// (function () {
// var array = [];

//   items.filter(function(value){
//     if(value.currency_code === "GBP") {
//         array.push(value.title);
//         array.push(value.price);
//     } // end of the if 

//   }) //end of filter
// console.log(array);

//   var answerA = array.pop();
//   var answerB = array.pop();
//   var answer = answerB+" "+answerA;



//  var answer3 = document.querySelector('#answer3');
//   var textNode = document.createTextNode(answer);
//   answer3.appendChild(textNode);



//  })(); // end of self executing function

//4-----------------------------------------
(function () {




 })(); // end of self executing function










// (function () {
//   var arrayPrice = [];
//   // var item1 = items[0].price * parseInt(items[0].quantity);
//     items.map(function(i) { 
//         var item = items[0].price * parseInt(items[0].quantity);
//           arrayPrice.push(item); 
//     }); //end of map method
// console.dir(arrayPrice);
// console.log(arrayPrice);
  
// })();

