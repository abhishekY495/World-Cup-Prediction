// InputBoxes
const nedGoalsInput = document.querySelector("#ned-goals");
const argGoalsInput = document.querySelector("#arg-goals");
const croGoalsInput = document.querySelector("#cro-goals");
const braGoalsInput = document.querySelector("#bra-goals");
const engGoalsInput = document.querySelector("#eng-goals");
const fraGoalsInput = document.querySelector("#fra-goals");
const marGoalsInput = document.querySelector("#mar-goals");
const porGoalsInput = document.querySelector("#por-goals");
//
const semiGroup1Country1ScoreInput = document.querySelector(".semi-group1-Country1-score");
const semiGroup1Country2ScoreInput = document.querySelector(".semi-group1-Country2-score");
const semiGroup2Country1ScoreInput = document.querySelector(".semi-group2-Country1-score");
const semiGroup2Country2ScoreInput = document.querySelector(".semi-group2-Country2-score");
//
const finalCountry1ScoreInput = document.querySelector(".final-Country1-score");
const finalCountry2ScoreInput = document.querySelector(".final-Country2-score");

// Flags
const semiFinalGroup1Country1Flag = document.querySelector(".semi-final-group1-Country1-flag");
const semiFinalGroup1Country2Flag = document.querySelector(".semi-final-group1-Country2-flag");
const semiFinalGroup2Country1Flag = document.querySelector(".semi-final-group2-Country1-flag");
const semiFinalGroup2Country2Flag = document.querySelector(".semi-final-group2-Country2-flag");
const finalCountry1Flag = document.querySelector(".final-Country1-flag");
const finalCountry2Flag = document.querySelector(".final-Country2-flag");

// Groups
const semiFinalGroup1Country1 = document.querySelector(".semi-final-group1-Country1");
const semiFinalGroup1Country2 = document.querySelector(".semi-final-group1-Country2");
const semiFinalGroup2Country1 = document.querySelector(".semi-final-group2-Country1");
const semiFinalGroup2Country2 = document.querySelector(".semi-final-group2-Country2");
const finalCountry1 = document.querySelector(".final-Country1");
const finalCountry2 = document.querySelector(".final-Country2");

// Forward circle buttons
const forwardQuarterGroup1 = document.querySelector(".forward-quarter-group-1");
const forwardQuarterGroup2 = document.querySelector(".forward-quarter-group-2");
const forwardQuarterGroup3 = document.querySelector(".forward-quarter-group-3");
const forwardQuarterGroup4 = document.querySelector(".forward-quarter-group-4");
const forwardSemiGroup1 = document.querySelector(".forward-semi-group-1");
const forwardSemiGroup2 = document.querySelector(".forward-semi-group-2");
const forwardFinal = document.querySelector(".forward-final");

// Lines for animation
const quarter1ForwardLine = document.querySelector(".quarter-group1-forward-line");
const quarter1DownLine = document.querySelector(".quarter-group1-down-line");
const quarter2ForwardLine = document.querySelector(".quarter-group2-forward-line");
const quarter2UpLine = document.querySelector(".quarter-group2-up-line");
const quarter3ForwardLine = document.querySelector(".quarter-group3-forward-line");
const quarter3DownLine = document.querySelector(".quarter-group3-down-line");
const quarter4ForwardLine = document.querySelector(".quarter-group4-forward-line");
const quarter4UpLine = document.querySelector(".quarter-group4-up-line");
//
const semi1ForwardLine = document.querySelector(".semi-group1-forward-line");
const semi1DownLine = document.querySelector(".semi-group1-down-line");
const semi2ForwardLine = document.querySelector(".semi-group2-forward-line");
const semi2UpLine = document.querySelector(".semi-group2-up-line");

// Callout-Box for Error messages
const calloutBox = document.querySelector(".callout-box");
const calloutMessage = document.querySelector(".callout-message");

// // // // // // // // // // // // // // // // // // // // //

//
forwardQuarterGroup1.addEventListener("click", () => {
  qualifyingCountry(
    nedGoalsInput,
    argGoalsInput,
    semiFinalGroup1Country1,
    semiFinalGroup1Country1Flag,
    semiGroup1Country1ScoreInput,
    quarter1ForwardLine,
    quarter1DownLine,
    quarter1DownLine
  );
});
forwardQuarterGroup2.addEventListener("click", () => {
  qualifyingCountry(
    croGoalsInput,
    braGoalsInput,
    semiFinalGroup1Country2,
    semiFinalGroup1Country2Flag,
    semiGroup1Country2ScoreInput,
    quarter2ForwardLine,
    quarter2UpLine,
    quarter2UpLine
  );
});
forwardQuarterGroup3.addEventListener("click", () => {
  qualifyingCountry(
    engGoalsInput,
    fraGoalsInput,
    semiFinalGroup2Country1,
    semiFinalGroup2Country1Flag,
    semiGroup2Country1ScoreInput,
    quarter3ForwardLine,
    quarter3DownLine,
    quarter3DownLine
  );
});
forwardQuarterGroup4.addEventListener("click", () => {
  qualifyingCountry(
    marGoalsInput,
    porGoalsInput,
    semiFinalGroup2Country2,
    semiFinalGroup2Country2Flag,
    semiGroup2Country2ScoreInput,
    quarter4ForwardLine,
    quarter4UpLine,
    quarter4UpLine
  );
});
//
forwardSemiGroup1.addEventListener("click", () => {
  qualifyingCountry(
    semiGroup1Country1ScoreInput,
    semiGroup1Country2ScoreInput,
    finalCountry1,
    finalCountry1Flag,
    finalCountry1ScoreInput,
    semi1ForwardLine,
    semi1DownLine,
    semi1DownLine
  );
});
forwardSemiGroup2.addEventListener("click", () => {
  qualifyingCountry(
    semiGroup2Country1ScoreInput,
    semiGroup2Country2ScoreInput,
    finalCountry2,
    finalCountry2Flag,
    finalCountry2ScoreInput,
    semi2ForwardLine,
    semi2UpLine,
    semi2UpLine
  );
});

//
function qualifyingCountry(
  goal1,
  goal2,
  CountryName,
  flag,
  scoreInput,
  forward,
  down,
  up
) {
  if (goal1.value && goal2.value) {
    if (Number(goal1.value) === Number(goal2.value)) {
      calloutMessage.innerText = "Scores cannot be same.";
      calloutBox.style.display = "flex";
      shakeScore(goal1, goal2);
    } else if (Number(goal1.value) > Number(goal2.value)) {
      forward.style.display = "block";
      confetti(
        goal1.parentElement.nextElementSibling.nextElementSibling
          .nextElementSibling.nextElementSibling
      ).goToAndPlay(0, true);
      setTimeout(() => {
        down.style.display = "block";
        up.style.display = "block";
      }, 610);
      //
      setTimeout(() => {
        CountryName.innerText = goal1.parentElement.innerText;
        flag.src = goal1.parentElement.childNodes[3].src;
        scoreInput.disabled = false;
        groupOpacityAndButton();
      }, 1200);
      calloutBox.style.display = "none";
    } else {
      forward.style.display = "block";
      confetti(goal2.parentElement.previousElementSibling).goToAndPlay(0, true);
      setTimeout(() => {
        up.style.display = "block";
        down.style.display = "block";
      }, 610);
      //
      setTimeout(() => {
        CountryName.innerText = goal2.parentElement.innerText;
        flag.src = goal2.parentElement.childNodes[3].src;
        scoreInput.disabled = false;
        groupOpacityAndButton();
      }, 1200);
      calloutBox.style.display = "none";
    }
  } else {
    shakeScore(goal1, goal2);
    calloutMessage.innerText = "Cannot be empty.";
    calloutBox.style.display = "flex";
  }
}

//
function shakeScore(goal1, goal2) {
  if (!goal1.value) {
    goal1.classList.add("shake-score");
  }
  if (!goal2.value) {
    goal2.classList.add("shake-score");
  }
  setTimeout(() => {
    goal1.classList.remove("shake-score");
    goal2.classList.remove("shake-score");
  }, 500);
}

//
function confetti(group) {
  return bodymovin.loadAnimation({
    wrapper: group,
    animType: "svg",
    loop: false,
    autoplay: false,
    path: "./celebrations/confetti.json",
  });
}
