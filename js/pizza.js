function getFlavour(){
  var flavour = document.getElementById("flavour").value

  return parseInt(flavour);
}

function getSize(){
  var size = document.getElementById("size").value

  return parseInt(size);
}

function getCrust(){
  var crust = document.getElementById("crust").value

  return parseInt(size);
}


function getToppings(){
  var toppings = document.getElementById("toppings").value

  return parseInt(toppings);
}

function getNumber(){
  var number = document.getElementById("number").value

  return parseInt(number);
}

function getCost(){
  var cost =(getCrust()+getFlavour()+getSize()+getToppings());
  alert("Thank you for using Rock pizza services,your total amounts to" +(cost));

};

