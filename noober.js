window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
//Recipe:

//create a variable for the rides data
let history = json

//create a loop for the rides
for (let i=0; i<history.length; i++) {

//create a variable to store each ride data field in memory
let PassengerFirstName =history[i].passengerDetails.first
let PassengerLastName =history[i].passengerDetails.last
let PassengerPhone = history[i].passengerDetails.phoneNumber

let pickupAddress = history[i].pickupLocation.address 
let pickupCity = history[i].pickupLocation.city 
let pickupState = history[i].pickupLocation.state 
let pickupZip = history[i].pickupLocation.zip 

let dropoffAddress = history[i].dropoffLocation.address
let dropoffCity = history[i].dropoffLocation.city
let dropoffState = history[i].dropoffLocation.state
let dropoffZip = history[i].dropoffLocation.zip 

let passengerNumber = history[i].numberOfPassengers
let purpleride = history[i].purpleRequested

let servicelevel = [`Noober Purple`,`Noober XL`, `Noober X` ]
if (purpleride == true) {
  servicelevel = `Noober Purple`
} else if(passengerNumber >= 4 ) {
  servicelevel = `Noober XL`
} else {
  servicelevel = `Noober X`
}



// Create a variable for the HTML element we're going to add to
let productHistory = document.querySelector(`.rides`)


// Insert HTML into the products element, using the data from each product

productHistory.insertAdjacentHTML(`beforeend`,`

<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
<i class="fas fa-car-side"></i>
<span>${servicelevel}</span>
</h1>

<div class="border-4 border-gray-900 p-4 my-4 text-left">
<div class="flex">
  <div class="w-1/2">
    <h2 class="text-2xl py-1">${PassengerFirstName} ${PassengerLastName}</h2>
    <p class="font-bold text-gray-600">${PassengerPhone}</p>
  </div>
  <div class="w-1/2 text-right">
    <span class="rounded-xl bg-gray-600 text-white p-2">
      ${passengerNumber}
    </span>
  </div>
</div>
<div class="mt-4 flex">
  <div class="w-1/2">
    <div class="text-sm font-bold text-gray-600">PICKUP</div>
    <p>${pickupAddress}</p>
    <p>${pickupCity} ${pickupState} ${pickupZip}</p>
  </div>
  <div class="w-1/2">
    <div class="text-sm font-bold text-gray-600">DROPOFF</div>
    <p>${dropoffAddress}</p>
    <p>${dropoffCity} ${dropoffState} ${dropoffZip} </p>
  </div>
</div>
</div>
`)

}
}
)