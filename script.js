//Fetch dom elements and set variables
const container = document.querySelector(".container"),
  seats = document.querySelectorAll(".row .seat:not(.occupied)"),
  count = document.getElementById("count"),
  total = document.getElementById("total"),
  movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

//Save selected movie index and price

function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
}

//Update total and count

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const seatsIndex = [...selectedSeats].map((seat) => {
    [...seats].indexOf(seat);
  });
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

