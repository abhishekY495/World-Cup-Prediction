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