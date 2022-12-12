nedGoalsInput.addEventListener("input", () => { forwardColor() });
argGoalsInput.addEventListener("input", () => { forwardColor() });
croGoalsInput.addEventListener("input", () => { forwardColor() });
braGoalsInput.addEventListener("input", () => { forwardColor() });
engGoalsInput.addEventListener("input", () => { forwardColor() });
fraGoalsInput.addEventListener("input", () => { forwardColor() });
marGoalsInput.addEventListener("input", () => { forwardColor() });
porGoalsInput.addEventListener("input", () => { forwardColor() });
//
semiGroup1Country1ScoreInput.addEventListener("input", () => { forwardColor() });
semiGroup1Country2ScoreInput.addEventListener("input", () => { forwardColor() });
semiGroup2Country1ScoreInput.addEventListener("input", () => { forwardColor() });
semiGroup2Country2ScoreInput.addEventListener("input", () => { forwardColor() });
//
finalCountry1ScoreInput.addEventListener("input", () => { forwardColor() });
finalCountry2ScoreInput.addEventListener("input", () => { forwardColor() });

const brightColor = "#02be02";
const dullColor = "#245c1e";
function forwardColor() {
  if (!nedGoalsInput.value && !argGoalsInput.value) {
    forwardQuarterGroup1.style.backgroundColor = dullColor;
  } else {
    forwardQuarterGroup1.style.backgroundColor = brightColor;
  }
  if (!croGoalsInput.value && !braGoalsInput.value) {
    forwardQuarterGroup2.style.backgroundColor = dullColor;
  } else {
    forwardQuarterGroup2.style.backgroundColor = brightColor;
  }
  if (!engGoalsInput.value && !fraGoalsInput.value) {
    forwardQuarterGroup3.style.backgroundColor = dullColor;
  } else {
    forwardQuarterGroup3.style.backgroundColor = brightColor;
  }
  if (!marGoalsInput.value && !porGoalsInput.value) {
    forwardQuarterGroup4.style.backgroundColor = dullColor;
  } else {
    forwardQuarterGroup4.style.backgroundColor = brightColor;
  }
  //
  if (
    !semiGroup1Country1ScoreInput.value && !semiGroup1Country2ScoreInput.value
  ) {
    forwardSemiGroup1.style.backgroundColor = dullColor;
  } else {
    forwardSemiGroup1.style.backgroundColor = brightColor;
  }
  if (
    !semiGroup2Country1ScoreInput.value && !semiGroup2Country2ScoreInput.value
  ) {
    forwardSemiGroup2.style.backgroundColor = dullColor;
  } else {
    forwardSemiGroup2.style.backgroundColor = brightColor;
  }
  //
  if (!finalCountry1ScoreInput.value && !finalCountry2ScoreInput.value) {
    forwardFinal.style.backgroundColor = dullColor;
  } else {
    forwardFinal.style.backgroundColor = brightColor;
  }
}

forwardColor();
