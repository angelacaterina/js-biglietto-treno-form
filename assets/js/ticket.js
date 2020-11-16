var btnGenera = document.getElementById('btn_genara');
var btnAnnulla = document.getElementById('btn_annulla');

btnGenera.addEventListener('click',
function(){
  var offer = "Standard ticket";
  // console.log(offer);

  //Genara ticket
  console.log('Genera Ticket');
  // Variabili: selezione valori input
  var fullNameInput = document.getElementById('full_name');
  var kmToGoInput = document.getElementById('km_to_go');
  var ageRangeInput = document.getElementById('age_range');

  // Variabili: selezione valori
  var fullName = fullNameInput.value;
  var kmToGo = kmToGoInput.value;
  var ageRange = ageRangeInput.value;
  console.log(fullName, kmToGo, ageRange);

  // calcolo biglietto treno
  var costPerKm = 0.21;
  var ticketPrice = costPerKm * kmToGo;
  console.log(ticketPrice);

  if(ageRange == "minorenne"){
    console.log("Applicato uno sconto del 20%");
    offer = "Sconto Minorenni";
    console.log(offer);
    ticketPrice = ticketPrice - (ticketPrice * 20) / 100;
    console.log(ticketPrice);
  } else if(ageRange == "over65"){
    console.log("Applicato uno sconto del 40%");
    offer = "Sconto Silver";
    console.log(offer);
    ticketPrice = ticketPrice - (ticketPrice * 40) / 100;
    console.log(ticketPrice);
  }
});

btnAnnulla.addEventListener('click',
function(){
  //Annulla Ticket
  console.log('Annulla operazione');
  document.getElementById('biglietto').style.display = "none";

  var fullNameInput = document.getElementById('full_name');
  var kmToGoInput = document.getElementById('km_to_go');
  var ageRangeInput = document.getElementById('age_range');

  fullNameInput.value = "";
  kmToGoInput.value = "";
  ageRangeInput.value = "ageRangeInput.value.style.color = white";
});
