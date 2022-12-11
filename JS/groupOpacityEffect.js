const semiFinalsGroup1 = document.querySelector(".smf-country-list-1");
const semiFinalsGroup2 = document.querySelector(".smf-country-list-2");
const finalsGroup = document.querySelector(".finals-group");

function groupOpacityAndButton() {
  if (semiFinalGroup1Country1.innerText && semiFinalGroup1Country2.innerText) {
    semiFinalsGroup1.style.opacity = 1;
    forwardSemiGroup1.disabled = false;
  } else {
    semiFinalsGroup1.style.opacity = 0.5;
    forwardSemiGroup1.disabled = true;
  }
  //
  if (semiFinalGroup2Country1.innerText && semiFinalGroup2Country2.innerText) {
    semiFinalsGroup2.style.opacity = 1;
    forwardSemiGroup2.disabled = false;
  } else {
    semiFinalsGroup2.style.opacity = 0.5;
    forwardSemiGroup2.disabled = true;
  }
  //
  if (finalCountry1.innerText && finalCountry2.innerText) {
    finalsGroup.style.opacity = 1;
    forwardFinal.style.bottom = "2.6rem";
    forwardFinal.disabled = false;
  } else {
    finalsGroup.style.opacity = 0.5;
    forwardFinal.disabled = true;
  }
}
