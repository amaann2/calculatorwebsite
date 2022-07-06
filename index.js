let btn = document.querySelectorAll("button");
let screen = document.getElementById("screen");
let screenValue = "";
for (amaan of btn) {
  amaan.addEventListener("click", function (e) {
    buttonText = e.target.innerText;
    screen.innerHTML = buttonText;
    console.log(buttonText);
    if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
