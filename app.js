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
    quarter1ForwardLine,
    quarter1DownLine,
    quarter1DownLine
  );
});
forwardQuarterGroup2.addEventListener("click", () => {
  qualifyingTeam(
    croGoalsInput,
    braGoalsInput,
    semiFinalGroup1Team2,
    semiFinalGroup1Team2Flag,
    semiGroup1Team2ScoreInput,
    quarter2ForwardLine,
    quarter2UpLine,
    quarter2UpLine,
  );
});
forwardQuarterGroup3.addEventListener("click", () => {
  qualifyingTeam(
    engGoalsInput,
    fraGoalsInput,
    semiFinalGroup2Team1,
    semiFinalGroup2Team1Flag,
    semiGroup2Team1ScoreInput,
    quarter3ForwardLine,
    quarter3DownLine,
    quarter3DownLine,
  );
});
forwardQuarterGroup4.addEventListener("click", () => {
  qualifyingTeam(
    marGoalsInput,
    porGoalsInput,
    semiFinalGroup2Team2,
    semiFinalGroup2Team2Flag,
    semiGroup2Team2ScoreInput,
    quarter4ForwardLine,
    quarter4UpLine,
    quarter4UpLine
  );
});
//
forwardSemiGroup1.addEventListener("click", () => {
  qualifyingTeam(
    semiGroup1Team1ScoreInput,
    semiGroup1Team2ScoreInput,
    finalTeam1,
    finalTeam1Flag,
    finalTeam1ScoreInput,
    semi1ForwardLine,
    semi1DownLine,
    semi1DownLine
  );
});
forwardSemiGroup2.addEventListener("click", () => {
  qualifyingTeam(
    semiGroup2Team1ScoreInput,
    semiGroup2Team2ScoreInput,
    finalTeam2,
    finalTeam2Flag,
    finalTeam2ScoreInput,
    semi2ForwardLine,
    semi2UpLine,
    semi2UpLine
  );
});

function confetti(group) {
  return bodymovin.loadAnimation({
    wrapper: group,
    animType: 'svg',
    loop: false,
    autoplay: false,
    path: "./celebrations/confetti.json"
  })
}

const calloutBox = document.querySelector(".callout-box");
const calloutMessage = document.querySelector(".callout-message");
// 
const quarter1ForwardLine = document.querySelector(".quarter-group1-forward-line");
const quarter1DownLine = document.querySelector(".quarter-group1-down-line");
const quarter2ForwardLine = document.querySelector(".quarter-group2-forward-line");
const quarter2UpLine = document.querySelector(".quarter-group2-up-line");
const quarter3ForwardLine = document.querySelector(".quarter-group3-forward-line");
const quarter3DownLine = document.querySelector(".quarter-group3-down-line");
const quarter4ForwardLine = document.querySelector(".quarter-group4-forward-line");
const quarter4UpLine = document.querySelector(".quarter-group4-up-line");

const semi1ForwardLine = document.querySelector(".semi-group1-forward-line");
const semi1DownLine = document.querySelector(".semi-group1-down-line");
const semi2ForwardLine = document.querySelector(".semi-group2-forward-line");
const semi2UpLine = document.querySelector(".semi-group2-up-line");
// 

function qualifyingTeam(goal1, goal2, teamName, flag, scoreInput, forward, down, up) {
  if (goal1.value && goal2.value) {
    if (Number(goal1.value) === Number(goal2.value)) {
      calloutMessage.innerText = "Scores cannot be same."
      calloutBox.style.display = "flex";
      shakeScore(goal1, goal2);
    } else if (Number(goal1.value) > Number(goal2.value)) {
      forward.style.display = "block";
      confetti(goal1.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling).goToAndPlay(0, true);
      setTimeout(()=> {
        down.style.display = "block";
        up.style.display = "block";
      }, 610);
      // 
      setTimeout(() => {
        teamName.innerText = goal1.parentElement.innerText;
        flag.src = goal1.parentElement.childNodes[3].src;
        scoreInput.disabled = false;
        opacityAndButton();
      }, 1200)
      calloutBox.style.display = "none";
    } else {
      forward.style.display = "block";
      confetti(goal2.parentElement.previousElementSibling).goToAndPlay(0, true);
      setTimeout(()=> {
        up.style.display = "block";
        down.style.display = "block";
      }, 610)
      // 
      setTimeout(() => {
        teamName.innerText = goal2.parentElement.innerText;
        flag.src = goal2.parentElement.childNodes[3].src;
        scoreInput.disabled = false;
        opacityAndButton();
      }, 1200)
      calloutBox.style.display = "none";
    }
  } else {
    shakeScore(goal1, goal2);
    calloutMessage.innerText = "Cannot be empty."
    calloutBox.style.display = "flex";
  }
}

function downLine(down) {
  setTimeout(()=> {
    down.style.display = "block";
  }, 610);
}
function upLine(up) {
  setTimeout(()=> {
    up.style.display = "block";
  }, 610);
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

// 

const winner = document.querySelector(".winner");
const winningCountryName = document.querySelector(".winner-team");

const finalTeam1Name = document.querySelector(".final-team1");
const finalTeam1Score = document.querySelector(".final-team1-score");
const finalTeam2Name = document.querySelector(".final-team2");
const finalTeam2Score = document.querySelector(".final-team2-score");

function winnerCelebration() {
  return tsParticles.load("tsparticles", {
    "fullScreen": {
      "zIndex": 1
    },
    "particles": {
      "number": {
        "value": 0
      },
      "color": {
        "value": [
          "#00FFFC",
          "#FC00FF",
          "#fffc00"
        ]
      },
      "shape": {
        "type": "square",
        "options": {}
      },
      "opacity": {
        "value": 1,
        "animation": {
          "enable": true,
          "minimumValue": 0,
          "speed": 2,
          "startValue": "max",
          "destroy": "min"
        }
      },
      "size": {
        "value": 4,
        "random": {
          "enable": true,
          "minimumValue": 5
        }
      },
      "links": {
        "enable": false
      },
      "life": {
        "duration": {
          "sync": true,
          "value": 5
        },
        "count": 1
      },
      "move": {
        "enable": true,
        "gravity": {
          "enable": true,
          "acceleration": 5
        },
        "speed": {
          "min": 20,
          "max": 20
        },
        "decay": 0.1,
        "direction": "none",
        "straight": false,
        "outModes": {
          "default": "destroy",
          "top": "none"
        }
      },
      "rotate": {
        "value": {
          "min": 0,
          "max": 360
        },
        "direction": "random",
        "move": true,
        "animation": {
          "enable": true,
          "speed": 60
        }
      },
      "tilt": {
        "direction": "random",
        "enable": true,
        "move": true,
        "value": {
          "min": 0,
          "max": 360
        },
        "animation": {
          "enable": true,
          "speed": 60
        }
      },
      "roll": {
        "darken": {
          "enable": true,
          "value": 25
        },
        "enable": true,
        "speed": {
          "min": 15,
          "max": 25
        }
      },
      "wobble": {
        "distance": 30,
        "enable": true,
        "move": true,
        "speed": {
          "min": -15,
          "max": 15
        }
      }
    },
    "emitters": {
      "life": {
        "count": 0,
        "duration": 0.1,
        "delay": 0.4
      },
      "rate": {
        "delay": 0.1,
        "quantity": 100
      },
      "size": {
        "width": 0,
        "height": 0
      }
    }
  });
}

function winningTeam() {
  if (finalTeam1Score.value && finalTeam2Score.value) {
    if (Number(finalTeam1Score.value) === Number(finalTeam2Score.value)) {
      calloutMessage.innerText = "Scores cannot be same"
      calloutBox.style.display = "flex";
    } else if (Number(finalTeam1Score.value) > Number(finalTeam2Score.value)) {
      calloutBox.style.display = "none";
      winner.classList.remove("hide");
      winner.classList.add("show-cup");
      winnerCelebration();
      countryName(finalTeam1Name);
    } else {
      calloutBox.style.display = "none";
      winner.classList.remove("hide");
      winner.classList.add("show-cup");
      winnerCelebration();
      countryName(finalTeam2Name);
    }
  } else {
    shakeScore(finalTeam1Score, finalTeam2Score);
    calloutMessage.innerText = "Scores cannot be empty"
    calloutBox.style.display = "flex";
  }
}

function countryName(country) {
  const shortName = country.innerText;
  if (shortName === "NED") {
    winningCountryName.innerText = "Netherland";
  } else if (shortName === "ARG") {
    winningCountryName.innerText = "Argentina";
  } else if (shortName === "CRO") {
    winningCountryName.innerText = "Croatia";
  } else if (shortName === "BRA") {
    winningCountryName.innerText = "Brazil";
  } else if (shortName === "ENG") {
    winningCountryName.innerText = "England";
  } else if (shortName === "FRA") {
    winningCountryName.innerText = "France";
  } else if (shortName === "MAR") {
    winningCountryName.innerText = "Morocco";
  } else if (shortName === "POR") {
    winningCountryName.innerText = "Portugal";
  }
}

forwardFinal.addEventListener("click", () => {
  winningTeam();
});



function forwardColor() {
  if (!nedGoalsInput.value && !argGoalsInput.value) {
    forwardQuarterGroup1.style.backgroundColor = "#245c1e";
  } else {
    forwardQuarterGroup1.style.backgroundColor = "#02be02";
  }
  if (!croGoalsInput.value && !braGoalsInput.value) {
    forwardQuarterGroup2.style.backgroundColor = "#245c1e";
  } else {
    forwardQuarterGroup2.style.backgroundColor = "#02be02";
  }
  if (!engGoalsInput.value && !fraGoalsInput.value) {
    forwardQuarterGroup3.style.backgroundColor = "#245c1e";
  } else {
    forwardQuarterGroup3.style.backgroundColor = "#02be02";
  }
  if (!marGoalsInput.value && !porGoalsInput.value) {
    forwardQuarterGroup4.style.backgroundColor = "#245c1e";
  } else {
    forwardQuarterGroup4.style.backgroundColor = "#02be02";
  }
  // 
  if (!semiGroup1Team1ScoreInput.value && !semiGroup1Team2ScoreInput.value) {
    forwardSemiGroup1.style.backgroundColor = "#245c1e";
  } else {
    forwardSemiGroup1.style.backgroundColor = "#02be02";
  }
  if (!semiGroup2Team1ScoreInput.value && !semiGroup2Team2ScoreInput.value) {
    forwardSemiGroup2.style.backgroundColor = "#245c1e";
  } else {
    forwardSemiGroup2.style.backgroundColor = "#02be02";
  }
  // 
  if (!finalTeam1ScoreInput.value && !finalTeam2ScoreInput.value) {
    forwardFinal.style.backgroundColor = "#245c1e";
  } else {
    forwardFinal.style.backgroundColor = "#02be02";
  }
}

forwardColor();

nedGoalsInput.addEventListener("input", () => {forwardColor()});
argGoalsInput.addEventListener("input", () => {forwardColor()});
croGoalsInput.addEventListener("input", () => {forwardColor()});
braGoalsInput.addEventListener("input", () => {forwardColor()});
engGoalsInput.addEventListener("input", () => {forwardColor()});
fraGoalsInput.addEventListener("input", () => {forwardColor()});
marGoalsInput.addEventListener("input", () => {forwardColor()});
porGoalsInput.addEventListener("input", () => {forwardColor()});
// 
semiGroup1Team1ScoreInput.addEventListener("input", () => {forwardColor()});
semiGroup1Team2ScoreInput.addEventListener("input", () => {forwardColor()});
semiGroup2Team1ScoreInput.addEventListener("input", () => {forwardColor()});
semiGroup2Team2ScoreInput.addEventListener("input", () => {forwardColor()});
// 
finalTeam1ScoreInput.addEventListener("input", () => {forwardColor()});
finalTeam2ScoreInput.addEventListener("input", () => {forwardColor()});