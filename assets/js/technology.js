const showData = (result) => {
  document.querySelector("#name").innerHTML = result.name;
  document.querySelector("#description").innerHTML = result.description;
  document
    .querySelector("#portrait")
    .setAttribute("srcset", result.images.portrait);
  document
    .querySelector("#landscape")
    .setAttribute("src", result.images.landscape);
};

function technology(bt) {
  fetch("../../data/data.json")
    .then((response) => response.json())
    .then((data) => showData(data.technology[bt]))
    .catch((err) => console.log(err));
}

technology(0);

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
