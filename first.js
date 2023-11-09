const buttonPage = document.querySelector("#changePage");
const checkbox = document.querySelector("#checkBox");
const labelCheck = document.getElementById("label-check");
const checkIcon = labelCheck.querySelector(".check-icon");

checkIcon.style.display = "none";

function setCheck() {
  if (checkbox.checked) {
    checkIcon.style.display = "inline-block";
  } else {
    checkIcon.style.display = "none";
  }
}

checkbox.addEventListener("change", setCheck);

function setSecondPage() {
  if (checkbox.checked) {
    window.location.href = "index.html";
  } else {
    alert("Prometti di fare il quiz da solo prima di procedere.");
  }
}

buttonPage.addEventListener("click", setSecondPage);
