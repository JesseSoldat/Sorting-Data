(function () {
  var arrayPrice = [];
  // var item1 = items[0].price * parseInt(items[0].quantity);
    items.map(function(i) {
      
        var item = items[0].price * parseInt(items[0].quantity);
          arrayPrice.push(item);
       

    }); //end of map method

console.dir(arrayPrice);
console.log(arrayPrice);
  
})();

