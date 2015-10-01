(function() {
 // items.forEach(function(item){
 // console.log(item.price);
 // })
//create an array of the prices
  var prices = items.map(function(item){
    return item.price ;
  });
  console.log(prices);
  //add all the prices together 
  var sum = prices.reduce(function(prev,next){
    return prev + next;
  });
  console.log(sum);
  var avg = sum / items.length;
  //convert it to 2 decimal places
  var converted = avg.toFixed(2);
  console.log(converted);
  //make it a string
  var string = "The average price is $" +converted;
  console.log(string);

  var answer1 = document.querySelector('#answer1');
  var textNode = document.createTextNode(string);

  answer1.appendChild(textNode);
})();
















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

