var btnGenera = document.getElementById('btn_genara');
var btnAnnulla = document.getElementById('btn_annulla');

btnGenera.addEventListener('click',function(){
  //// section#calcolo_biglietto
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

  // Variabili e calcolo biglietto treno
  var offer = "Standard ticket";
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

  // section#biglietto
  //Variabili: selezione elementi del biglietto
  var elPassenger = document.getElementById('passenger_name');
  var elSconto = document.getElementById('sconto');
  var elCarrozza = document.getElementById('carrozza');
  var elCodice= document.getElementById('codice_cp');
  var elTicket = document.getElementById('ticket_price');

  // Genara numero carrozza e codice-cp
  var numberCarrozza = Math.floor(Math.random() * 9) + 1 ;
  var codiceCp = Math.floor(Math.random() * (100000 - 90000)) + 90000 ;

  // Inserimento dati nel biglietto
  elPassenger.innerHTML = fullName;
  elSconto.innerHTML = offer;
  elCarrozza.innerHTML = numberCarrozza;
  elCodice.innerHTML = codiceCp;
  elTicket.innerHTML = ticketPrice.toFixed(2) + "€";

  var passengerDetail = document.getElementById('passenger');
  passengerDetail.innerHTML = "DETTAGLIO PASSEGERI";
});

btnAnnulla.addEventListener('click',
function(){
  //Annulla Ticket
  console.log('Annulla operazione');
  document.getElementById('biglietto').style.display = "none";

  // Variabili da nascondere: selezione valori input
  var fullNameInput = document.getElementById('full_name');
  var kmToGoInput = document.getElementById('km_to_go');
  var ageRangeInput = document.getElementById('age_range');

  fullNameInput.value = "";
  kmToGoInput.value = "";
  ageRangeInput.value = "";
});
