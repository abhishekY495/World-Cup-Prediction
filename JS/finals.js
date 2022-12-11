const winner = document.querySelector(".winner");
const winningCountryName = document.querySelector(".winner-Country");
//
const finalCountry1Name = document.querySelector(".final-Country1");
const finalCountry1Score = document.querySelector(".final-Country1-score");
const finalCountry2Name = document.querySelector(".final-Country2");
const finalCountry2Score = document.querySelector(".final-Country2-score");

// // // // // // // // // // // // // // // // // // // // //

forwardFinal.addEventListener("click", () => {
  winningCountry();
});

//
function winningCountry() {
  if (finalCountry1Score.value && finalCountry2Score.value) {
    if (Number(finalCountry1Score.value) === Number(finalCountry2Score.value)) {
      calloutMessage.innerText = "Scores cannot be same";
      calloutBox.style.display = "flex";
    } else if (
      Number(finalCountry1Score.value) > Number(finalCountry2Score.value)
    ) {
      calloutBox.style.display = "none";
      winner.classList.remove("hide");
      winner.classList.add("show-cup");
      winnerCelebration();
      countryName(finalCountry1Name);
    } else {
      calloutBox.style.display = "none";
      winner.classList.remove("hide");
      winner.classList.add("show-cup");
      winnerCelebration();
      countryName(finalCountry2Name);
    }
  } else {
    shakeScore(finalCountry1Score, finalCountry2Score);
    calloutMessage.innerText = "Scores cannot be empty";
    calloutBox.style.display = "flex";
  }
}

//
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

//
function winnerCelebration() {
  return tsParticles.load("tsparticles", {
    fullScreen: {
      zIndex: 1,
    },
    particles: {
      number: {
        value: 0,
      },
      color: {
        value: ["#00FFFC", "#FC00FF", "#fffc00"],
      },
      shape: {
        type: "square",
        options: {},
      },
      opacity: {
        value: 1,
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 2,
          startValue: "max",
          destroy: "min",
        },
      },
      size: {
        value: 4,
        random: {
          enable: true,
          minimumValue: 5,
        },
      },
      links: {
        enable: false,
      },
      life: {
        duration: {
          sync: true,
          value: 5,
        },
        count: 1,
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 3,
        },
        speed: {
          min: 20,
          max: 20,
        },
        decay: 0.1,
        direction: "none",
        straight: false,
        outModes: {
          default: "destroy",
          top: "none",
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: "random",
        move: true,
        animation: {
          enable: true,
          speed: 60,
        },
      },
      tilt: {
        direction: "random",
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 100,
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        speed: {
          min: 15,
          max: 25,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15,
        },
      },
    },
    emitters: {
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.4,
      },
      rate: {
        delay: 0.1,
        quantity: 100,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
  });
}
