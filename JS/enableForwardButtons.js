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

const dull = "#02be02";
const bright = "#245c1e";
function forwardColor() {
  if (!nedGoalsInput.value && !argGoalsInput.value) {
    forwardQuarterGroup1.style.backgroundColor = bright;
  } else {
    forwardQuarterGroup1.style.backgroundColor = dull;
  }
  if (!croGoalsInput.value && !braGoalsInput.value) {
    forwardQuarterGroup2.style.backgroundColor = bright;
  } else {
    forwardQuarterGroup2.style.backgroundColor = dull;
  }
  if (!engGoalsInput.value && !fraGoalsInput.value) {
    forwardQuarterGroup3.style.backgroundColor = bright;
  } else {
    forwardQuarterGroup3.style.backgroundColor = dull;
  }
  if (!marGoalsInput.value && !porGoalsInput.value) {
    forwardQuarterGroup4.style.backgroundColor = bright;
  } else {
    forwardQuarterGroup4.style.backgroundColor = dull;
  }
  //
  if (
    !semiGroup1Country1ScoreInput.value && !semiGroup1Country2ScoreInput.value
  ) {
    forwardSemiGroup1.style.backgroundColor = bright;
  } else {
    forwardSemiGroup1.style.backgroundColor = dull;
  }
  if (
    !semiGroup2Country1ScoreInput.value && !semiGroup2Country2ScoreInput.value
  ) {
    forwardSemiGroup2.style.backgroundColor = bright;
  } else {
    forwardSemiGroup2.style.backgroundColor = dull;
  }
  //
  if (!finalCountry1ScoreInput.value && !finalCountry2ScoreInput.value) {
    forwardFinal.style.backgroundColor = bright;
  } else {
    forwardFinal.style.backgroundColor = dull;
  }
}

forwardColor();
