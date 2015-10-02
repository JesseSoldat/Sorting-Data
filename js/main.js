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
// (function () {
//   var array = [];
//   items.filter(function(obj){
    
//     if (obj.materials.indexOf('wood') !== -1 ){
//       array.push(obj.title);
//     } //end of if statement

//   })//end of filter 
//   var item1 = array.shift();
//   var item2 = array.shift();
//   var item3 = array.shift();
//   var item4 = array.shift();
//   var item5 = array.shift();
//   // console.log(item1);
//   //ITEM1
//   var answer4A = document.querySelector('#answer4A');
//   var textNode = document.createTextNode(item1);
//      answer4A.appendChild(textNode);
//   //ITEM2
//   var answer4B = document.querySelector('#answer4B');
//   var textNode = document.createTextNode(item2);
//      answer4B.appendChild(textNode);
//   //ITEM3
//   var answer4C = document.querySelector('#answer4C');
//   var textNode = document.createTextNode(item3);
//      answer4C.appendChild(textNode);
//   //ITEM4
//   var answer4D = document.querySelector('#answer4D');
//   var textNode = document.createTextNode(item4);
//      answer4D.appendChild(textNode);
//   //ITEM5
//   var answer4E = document.querySelector('#answer4E');
//   var textNode = document.createTextNode(item5);
//      answer4E.appendChild(textNode);
//  })(); // end of self executing function

//5
(function(){
  var array = [];
  var array2 = [];

items.filter(function(count){
  if (count.materials.length >= 8) {
     array.push(count.title);
     array.push(count.materials.length);
     array2.push(count.materials);

    } //end of if
}); //end of for filter
var item1 = array.shift();
var item2 = array.shift();
var itemA = item1+" "+item2;

var item3 = array.shift();
var item4 = array.shift();
var itemB = item3+" "+item4;

var itemC = array2.shift();
var itemD = array2.shift();

//ITEM1
var answer5A = document.querySelector('#answer5A');
var textNode = document.createTextNode(itemA);
answer5A.appendChild(textNode);
//ITEM2
var answer5B = document.querySelector('#answer5B');
var textNode = document.createTextNode(itemC);
answer5B.appendChild(textNode);
//ITEM3
var answer5C = document.querySelector('#answer5C');
var textNode = document.createTextNode(itemB);
answer5C.appendChild(textNode);
//ITEM3
var answer5D = document.querySelector('#answer5D');
var textNode = document.createTextNode(itemD);
answer5D.appendChild(textNode);
})(); 
// end of self executing function
//6
( function(){
  var array = [];

  items.filter(function(made){
      if(made.who_made === 'i_did'){
          // console.log(made.who_made);
          array.push(made.who_made);
      }//end of if

  })//end of filter
var item1 = array.length;

var answer6A = document.querySelector('#answer6A');
var textNode = document.createTextNode(item1);
answer6A.appendChild(textNode);

})(); // end of self executing function




