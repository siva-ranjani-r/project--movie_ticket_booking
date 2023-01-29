// const seats = document.querySelectorAll(".row .seat:not(.occupied)");
// const seatContainer = document.querySelector(".row-container");
// const count = document.getElementById("count");
// const total = document.getElementById("total");
// const movieSelect = document.getElementById("movie");


// seats.forEach(function(seat) {
//   seat.addEventListener("click", function(e) {
//     seat.classList.add("selected");
//     const selectedSeats = document.querySelectorAll(".container .selected");
//     selectedSeathLength = selectedSeats.length;
//     count.textContent = selectedSeathLength;
//     let ticketPrice = +movieSelect.value;
//     total.textContent = ticketPrice * selectedSeathLength;
//   });
// });
 
// var seat_one=document.getElementById("seat_one")
// function seat1()
// {
//   seat_one.style.backgroundColor="red"
//   this.onclick=function()
//   {
//     seat_one.style.backgroundColor="green"
//   }
// }

// var x=document.getElementById("one")
// var y=document.getElementById("total")
// a=0
// x.onclick=function()
// {
//   x.style.backgroundColor="#6feaf6"
//   a+=650;
//   y.innerHTML=a;
// }
// x.onclick=function()
// {
//   x.style.backgroundColor="#314c81"
//   a-=650;
//   y.innerHTML=a;
// }




// let selectedSeats = [];
// let ticketAmount = 0;

// function selectSeat(seat) {
//   if (!selectedSeats.includes(seat.id)) {
//     seat.style.backgroundColor = "green";
//     selectedSeats.push(seat.id);
//     ticketAmount += 10;
//   } else {
//     seat.style.backgroundColor = "white";
//     selectedSeats = selectedSeats.filter(id => id !== seat.id);
//     ticketAmount -= 10;
//   }
//   document.getElementById("ticket-amount").innerHTML = "Ticket Amount: $" + ticketAmount;
// }



// <div id="seats-container">
//     <div class="seat" id="seat1"></div>
//     <div class="seat" id="seat2"></div>
//     <div class="seat" id="seat3"></div>
//     <div class="seat" id="seat4"></div>
//     <div class="seat" id="seat5"></div>
//     <div class="seat" id="seat6"></div>
//     <div class="seat" id="seat7"></div>
//     <div class="seat" id="seat8"></div>
//     <div class="seat" id="seat9"></div>
//     <div class="seat" id="seat10"></div>
// </div>
// <div id="reserved-seats-count"></div>
// <div id="amount"></div>



// var container = document.getElementById("gold1");
// var reservedSeatsCount = document.getElementById("ticket-count");
// var amount = document.getElementById("ticket-amount");
// var seats = document.getElementsByClassName("seat");
// var seatsReserved = 0;
// var seatPrice = 650;

// container.addEventListener("click", function(e) {
//     if (e.target.classList.contains("seat")) {
//         if (e.target.style.backgroundColor !== "#31d7a9") {
//             e.target.style.backgroundColor = "#31d7a9";
//             seatsReserved++;
//             reservedSeatsCount.innerHTML ="seats reserved  "+seatsReserved ;
//             amount.innerHTML = "Total Amount: $" + seatsReserved * seatPrice;
//         } else {
//             e.target.style.backgroundColor = "#01163e";
//             seatsReserved--;
//             reservedSeatsCount.innerHTML = seatsReserved + " seats reserved";
//             amount.innerHTML = "Total Amount: $" + seatsReserved * seatPrice;
//         }
//     }
// });



var container = document.getElementById("seat-1");
var reservedSeatsCount = document.getElementById("ticket-count");
var amount = document.getElementById("ticket-amount");
var seats = document.getElementsByClassName("seat");
var selected = false;
var ticketAmount = 650;
var count=0;


container.addEventListener("click", function() {
  if (!selected) {
    this.style.backgroundColor = "#31d7a9";
    selected = true;
    count ++;
    reservedSeatsCount.innerHTML =" Selected Seats : "+count;
    amount.innerHTML = "Total Amount ₹" + count * ticketAmount;
  } else {
    this.style.backgroundColor = "#01163e";
    selected = false;
    count --;
    reservedSeatsCount.innerHTML = " Selected Seats : "+count;
    amount.innerHTML = "Total Amount ₹" + count * ticketAmount;
  }
});

