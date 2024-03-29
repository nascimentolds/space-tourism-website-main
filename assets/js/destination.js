const showData = (result) => {
  document.querySelector("#name").innerHTML = result.name;
  document.querySelector("#description").innerHTML = result.description;
  document.querySelector("#distance").innerHTML = result.distance;
  document.querySelector("#travel").innerHTML = result.travel;
  document.querySelector("#img").setAttribute("src", result.images.png);
};

function destination(bt) {
  fetch("../../data/data.json")
    .then((response) => response.json())
    .then((data) => showData(data.destinations[bt]))
    .catch((err) => console.log(err));
}

destination(0);

function changeBtnStatus(x) {
  var btn = document.querySelectorAll(".btn");

  for (var i = 0; i < btn.length; i++) {
    if (btn[i].value == x) {
      btn[i].setAttribute("aria-selected", true);
    } else {
      btn[i].setAttribute("aria-selected", false);
    }
  }
}
