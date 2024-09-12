const data = fetch("questions.json")
  .then((response) => response.json())
  .then((data) => {
    const start = document.querySelector(".startButton");
    const containerQuestion = document.querySelector("h2");
    const options = document.querySelector(".options");
    const hat = document.querySelector(".hat");
    const name = document.querySelector("#name");
    const continueButton = document.querySelector(".continueButton");
    const intro = document.querySelector(".containerIntro");
    const flagLeft = document.querySelector(".flag_left");
    const flagRight = document.querySelector(".flag_right");


    const gryffindor = document.querySelector(".gryffindor");
    const slytherin = document.querySelector(".slytherin");
    const ravenclaw = document.querySelector(".ravenclaw");
    const hufflepuff = document.querySelector(".hufflepuff");

    var current = 0;
    var gPoints = 0;
    var sPoints = 0;
    var rPoints = 0;
    var hPoints = 0;
    var win = "";

    function update() {
      if (current < data.length) {
        containerQuestion.innerText = data[current].question;
        gryffindor.innerText = data[current].gryffindor;
        slytherin.innerText = data[current].slytherin;
        ravenclaw.innerText = data[current].ravenclaw;
        hufflepuff.innerText = data[current].hufflepuff;
      } else {
        if (gPoints >= sPoints && gPoints >= rPoints && gPoints >= hPoints) {
          win = "¡Gryffindor!";
          containerQuestion.style.color = "#d32f2f";
          flagLeft.src = "./libs/images/gryffindor.png"
          flagRight.src = "./libs/images/gryffindor.png"
        } else if (
          sPoints >= gPoints &&
          sPoints >= rPoints &&
          sPoints >= hPoints
        ) {
          win = "¡Slytherin!";
          containerQuestion.style.color = "#2fd34a";
          flagLeft.src = "./libs/images/slytherin.png"
          flagRight.src = "./libs/images/slytherin.png"
        } else if (
          rPoints >= gPoints &&
          rPoints >= sPoints &&
          rPoints >= hPoints
        ) {
          win = "¡Ravenclaw!";
          containerQuestion.style.color = "#2f63d3";
          flagLeft.src = "./libs/images/ravenclaw.png"
          flagRight.src = "./libs/images/ravenclaw.png"
        } else if (
          hPoints >= gPoints &&
          hPoints >= sPoints &&
          hPoints >= rPoints
        ) {
          win = "¡Hufflepuff!";
          containerQuestion.style.color = "#d3892f";
          flagLeft.src = "./libs/images/hufflepuff.png"
          flagRight.src = "./libs/images/hufflepuff.png"
        }
        containerQuestion.innerText = win;
        options.style.display = "none";
        hat.style.display = "none";
        flagLeft.style.display = "block";
        flagRight.style.display = "block";
      }
    }

    name.addEventListener("input", () => {
      const userName = name.value.trim();
      const span = document.createElement("span")

      if (userName === "") {
        return;
      } else {
        start.addEventListener("click", () => {
          start.style.display = "none";
          continueButton.style.display = "block";
          name.style.display = "none";
          intro.innerText = "Hmmm..." + " " + userName + " " + "muy interezante"
          intro.style.display = "block";
          console.log(name.value);
        });
      }

      console.log(userName);
    });

    continueButton.addEventListener("click", () => {
      continueButton.style.display = "none";
      options.style.display = "grid";
      intro.style.display = "none";
      console.log(name.value);
      update();
    });

    gryffindor.addEventListener("click", () => {
      gPoints += 1;
      current += 1;
      update();
    });

    slytherin.addEventListener("click", () => {
      sPoints += 1;
      current += 1;
      update();
    });

    ravenclaw.addEventListener("click", () => {
      rPoints += 1;
      current += 1;
      update();
    });

    hufflepuff.addEventListener("click", () => {
      hPoints += 1;
      current += 1;
      update();
    });
  });
