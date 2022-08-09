const showData = (result) => {
  document.querySelector("#name").innerHTML = result.name;
  document.querySelector("#bio").innerHTML = result.bio;
  document.querySelector("#role").innerHTML = result.role;
  document.querySelector("#img").setAttribute("src", result.images.png);
};

function crew(bt) {
  fetch("../../data/data.json")
    .then((response) => response.json())
    .then((data) => showData(data.crew[bt]))
    .catch((err) => console.log(err));
}

crew(0);

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
