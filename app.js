// tsParticles.load("tsparticles", {
//   "fullScreen": {
//     "zIndex": 1
//   },
//   "particles": {
//     "number": {
//       "value": 0
//     },
//     "color": {
//       "value": [
//         "#00FFFC",
//         "#FC00FF",
//         "#fffc00"
//       ]
//     },
//     "shape": {
//       "type": "square",
//       "options": {}
//     },
//     "opacity": {
//       "value": 1,
//       "animation": {
//         "enable": true,
//         "minimumValue": 0,
//         "speed": 2,
//         "startValue": "max",
//         "destroy": "min"
//       }
//     },
//     "size": {
//       "value": 4,
//       "random": {
//         "enable": true,
//         "minimumValue": 5
//       }
//     },
//     "links": {
//       "enable": false
//     },
//     "life": {
//       "duration": {
//         "sync": true,
//         "value": 5
//       },
//       "count": 1
//     },
//     "move": {
//       "enable": true,
//       "gravity": {
//         "enable": true,
//         "acceleration": 5
//       },
//       "speed": {
//         "min": 20,
//         "max": 20
//       },
//       "decay": 0.1,
//       "direction": "none",
//       "straight": false,
//       "outModes": {
//         "default": "destroy",
//         "top": "none"
//       }
//     },
//     "rotate": {
//       "value": {
//         "min": 0,
//         "max": 360
//       },
//       "direction": "random",
//       "move": true,
//       "animation": {
//         "enable": true,
//         "speed": 60
//       }
//     },
//     "tilt": {
//       "direction": "random",
//       "enable": true,
//       "move": true,
//       "value": {
//         "min": 0,
//         "max": 360
//       },
//       "animation": {
//         "enable": true,
//         "speed": 60
//       }
//     },
//     "roll": {
//       "darken": {
//         "enable": true,
//         "value": 25
//       },
//       "enable": true,
//       "speed": {
//         "min": 15,
//         "max": 25
//       }
//     },
//     "wobble": {
//       "distance": 30,
//       "enable": true,
//       "move": true,
//       "speed": {
//         "min": -15,
//         "max": 15
//       }
//     }
//   },
//   "emitters": {
//     "life": {
//       "count": 0,
//       "duration": 0.1,
//       "delay": 0.4
//     },
//     "rate": {
//       "delay": 0.1,
//       "quantity": 100
//     },
//     "size": {
//       "width": 0,
//       "height": 0
//     }
//   }
// });

const nedGoalsInput = document.querySelector("#ned-goals");
const argGoalsInput = document.querySelector("#arg-goals");
const croGoalsInput = document.querySelector("#cro-goals");
const braGoalsInput = document.querySelector("#bra-goals");
const engGoalsInput = document.querySelector("#eng-goals");
const fraGoalsInput = document.querySelector("#fra-goals");
const marGoalsInput = document.querySelector("#mar-goals");
const porGoalsInput = document.querySelector("#por-goals");
//
const semiGroup1Team1ScoreInput = document.querySelector(
  ".semi-group1-team1-score"
);
const semiGroup1Team2ScoreInput = document.querySelector(
  ".semi-group1-team2-score"
);
const semiGroup2Team1ScoreInput = document.querySelector(
  ".semi-group2-team1-score"
);
const semiGroup2Team2ScoreInput = document.querySelector(
  ".semi-group2-team2-score"
);
//
const semiFinalGroup1Team1Flag = document.querySelector(
  ".semi-final-group1-team1-flag"
);
const semiFinalGroup1Team2Flag = document.querySelector(
  ".semi-final-group1-team2-flag"
);
const semiFinalGroup2Team1Flag = document.querySelector(
  ".semi-final-group2-team1-flag"
);
const semiFinalGroup2Team2Flag = document.querySelector(
  ".semi-final-group2-team2-flag"
);
const finalTeam1Flag = document.querySelector(".final-team1-flag");
const finalTeam2Flag = document.querySelector(".final-team2-flag");
//
const finalTeam1ScoreInput = document.querySelector(".final-team1-score");
const finalTeam2ScoreInput = document.querySelector(".final-team2-score");

const forwardQuarterGroup1 = document.querySelector(".forward-quarter-group-1");
const forwardQuarterGroup2 = document.querySelector(".forward-quarter-group-2");
const forwardQuarterGroup3 = document.querySelector(".forward-quarter-group-3");
const forwardQuarterGroup4 = document.querySelector(".forward-quarter-group-4");
const forwardSemiGroup1 = document.querySelector(".forward-semi-group-1");
const forwardSemiGroup2 = document.querySelector(".forward-semi-group-2");
const forwardFinal = document.querySelector(".forward-final");

const semiFinalGroup1Team1 = document.querySelector(".semi-final-group1-team1");
const semiFinalGroup1Team2 = document.querySelector(".semi-final-group1-team2");
const semiFinalGroup2Team1 = document.querySelector(".semi-final-group2-team1");
const semiFinalGroup2Team2 = document.querySelector(".semi-final-group2-team2");

const finalTeam1 = document.querySelector(".final-team1");
const finalTeam2 = document.querySelector(".final-team2");

//

forwardQuarterGroup1.addEventListener("click", () => {
  qualifyingTeam(
    nedGoalsInput,
    argGoalsInput,
    semiFinalGroup1Team1,
    semiFinalGroup1Team1Flag,
    semiGroup1Team1ScoreInput,
  );
});
forwardQuarterGroup2.addEventListener("click", () => {
  qualifyingTeam(
    croGoalsInput,
    braGoalsInput,
    semiFinalGroup1Team2,
    semiFinalGroup1Team2Flag,
    semiGroup1Team2ScoreInput
  );
});
forwardQuarterGroup3.addEventListener("click", () => {
  qualifyingTeam(
    engGoalsInput,
    fraGoalsInput,
    semiFinalGroup2Team1,
    semiFinalGroup2Team1Flag,
    semiGroup2Team1ScoreInput
  );
});
forwardQuarterGroup4.addEventListener("click", () => {
  qualifyingTeam(
    marGoalsInput,
    porGoalsInput,
    semiFinalGroup2Team2,
    semiFinalGroup2Team2Flag,
    semiGroup2Team2ScoreInput
  );
});
//
forwardSemiGroup1.addEventListener("click", () => {
  qualifyingTeam(
    semiGroup1Team1ScoreInput,
    semiGroup1Team2ScoreInput,
    finalTeam1,
    finalTeam1Flag,
    finalTeam1ScoreInput
  );
});
forwardSemiGroup2.addEventListener("click", () => {
  qualifyingTeam(
    semiGroup2Team1ScoreInput,
    semiGroup2Team2ScoreInput,
    finalTeam2,
    finalTeam2Flag,
    finalTeam2ScoreInput
  );
});

function confetti(group) {
  return bodymovin.loadAnimation({
    wrapper: group,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets8.lottiefiles.com/packages/lf20_obhph3sh.json"
  })
}

const calloutMessage = document.querySelector(".callout");
function qualifyingTeam(goal1, goal2, teamName, flag, scoreInput) {
  if (goal1.value && goal2.value) {
    if (Number(goal1.value) === Number(goal2.value)) {
      shakeScore(goal1, goal2);
      calloutMessage.style.display = "flex"
    } else if (Number(goal1.value) > Number(goal2.value)) {
      teamName.innerText = goal1.parentElement.innerText;
      flag.src = goal1.parentElement.childNodes[3].src;
      confetti(goal1.parentElement.nextElementSibling.nextElementSibling).goToAndPlay(0, true);
      scoreInput.disabled = false;
      opacityAndButton();
    } else {
      teamName.innerText = goal2.parentElement.innerText;
      flag.src = goal2.parentElement.childNodes[3].src;
      confetti(goal2.parentElement.previousElementSibling).goToAndPlay(0, true);
      scoreInput.disabled = false;
      opacityAndButton();
    }
  } else {
    shakeScore(goal1, goal2);
  }
}

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
  }, 500)
}


const semiFinalsGroup1 = document.querySelector(".smf-country-list-1");
const semiFinalsGroup2 = document.querySelector(".smf-country-list-2");
const finalsGroup = document.querySelector(".finals-group");
function opacityAndButton() {
  if (semiFinalGroup1Team1.innerText && semiFinalGroup1Team2.innerText) {
    semiFinalsGroup1.style.opacity = 1;
    forwardSemiGroup1.disabled = false;
  } else {
    semiFinalsGroup1.style.opacity = 0.5;
    forwardSemiGroup1.disabled = true;
  }
  //
  if (semiFinalGroup2Team1.innerText && semiFinalGroup2Team2.innerText) {
    semiFinalsGroup2.style.opacity = 1;
    forwardSemiGroup2.disabled = false;
  } else {
    semiFinalsGroup2.style.opacity = 0.5;
    forwardSemiGroup2.disabled = true;
  }
  //
  if (finalTeam1.innerText && finalTeam2.innerText) {
    finalsGroup.style.opacity = 1;
    forwardFinal.style.bottom = "2.6rem";
    forwardFinal.disabled = false;
  } else {
    finalsGroup.style.opacity = 0.5;
    forwardFinal.disabled = true;
  }
}

forwardFinal.addEventListener("click", () => {
  console.log(123);
})