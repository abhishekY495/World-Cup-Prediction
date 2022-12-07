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
    semiFinalGroup1Team1Flag
  );
});
forwardQuarterGroup2.addEventListener("click", () => {
  qualifyingTeam(
    croGoalsInput,
    braGoalsInput,
    semiFinalGroup1Team2,
    semiFinalGroup1Team2Flag
  );
});
forwardQuarterGroup3.addEventListener("click", () => {
  qualifyingTeam(
    engGoalsInput,
    fraGoalsInput,
    semiFinalGroup2Team1,
    semiFinalGroup2Team1Flag
  );
});
forwardQuarterGroup4.addEventListener("click", () => {
  qualifyingTeam(
    marGoalsInput,
    porGoalsInput,
    semiFinalGroup2Team2,
    semiFinalGroup2Team2Flag
  );
});
//
forwardSemiGroup1.addEventListener("click", () => {
  qualifyingTeam(
    semiGroup1Team1ScoreInput,
    semiGroup1Team2ScoreInput,
    finalTeam1,
    finalTeam1Flag
  );
});
forwardSemiGroup2.addEventListener("click", () => {
  qualifyingTeam(
    semiGroup2Team1ScoreInput,
    semiGroup2Team2ScoreInput,
    finalTeam2,
    finalTeam2Flag
  );
});

function qualifyingTeam(goal1, goal2, teamName, flag) {
  if (goal1.value && goal2.value) {
    if (Number(goal1.value) === Number(goal2.value)) {
      window.alert("A team should win to qualify for Semi-finals");
    } else if (Number(goal1.value) > Number(goal2.value)) {
      teamName.innerText = goal1.parentElement.innerText;
      flag.src = goal1.parentElement.childNodes[3].src;
    } else {
      teamName.innerText = goal2.parentElement.innerText;
      flag.src = goal2.parentElement.childNodes[3].src;
    }
  } else {
    window.alert("Enter scores for both teams");
  }
}
