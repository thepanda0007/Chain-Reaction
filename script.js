let sqbox1 = 0,
  sqbox2 = 0,
  sqbox3 = 0,
  sqbox4 = 0,
  sqbox5 = 0,
  sqbox6 = 0,
  sqbox7 = 0,
  sqbox8 = 0,
  sqbox9 = 0;

let occ1 = "",
  occ2 = "",
  occ3 = "",
  occ4 = "",
  occ5 = "",
  occ6 = "",
  occ7 = "",
  occ8 = "",
  occ9 = "";

let count = 0;
let winner = "";

let color = "blue";
let turn = "blue";

function handleBox1() {
  let clicked = document.getElementById("box1");
  clicked.innerHTML = "";

  if (sqbox1 === 0) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    clicked.appendChild(newElement);
    occ1 = color;
    sqbox1 = sqbox1 + 1;
    count = count + 1;
  } else if (sqbox1 === 1) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);

    sqbox1 = sqbox1 + 1;
    occ1 = color;
  } else if (sqbox1 === 2) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);

    let newElement3 = document.createElement("div");
    newElement3.classList.add(`${color}circle`);
    newElement3.classList.add("circle3");
    clicked.appendChild(newElement3);

    sqbox1 = sqbox1 + 1;
    occ1 = color;
  } else if (sqbox1 === 3) {
    clicked.innerHTML = "";
    sqbox1 = 0;
    occ1 = "";
    handleBox2();
    handleBox4();
  }
}

function handleBox2() {
  let clicked = document.getElementById("box2");
  clicked.innerHTML = "";

  if (sqbox2 === 0) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    clicked.appendChild(newElement);
    sqbox2 = sqbox2 + 1;
    occ2 = color;
    count = count + 1;
  } else if (sqbox2 === 1) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);
    sqbox2 = sqbox2 + 1;
    occ2 = color;
  } else if (sqbox2 === 2) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);

    let newElement3 = document.createElement("div");
    newElement3.classList.add(`${color}circle`);
    newElement3.classList.add("circle3");
    clicked.appendChild(newElement3);

    sqbox2 = sqbox2 + 1;
    occ2 = color;
  } else if (sqbox2 === 3) {
    clicked.innerHTML = "";
    sqbox2 = 0;
    occ2 = "";
    handleBox1();
    handleBox3();
    handleBox5();
  }
}

function handleBox3() {
  let clicked = document.getElementById("box3");
  clicked.innerHTML = "";

  if (sqbox3 === 0) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    clicked.appendChild(newElement);
    sqbox3 = sqbox3 + 1;
    occ3 = color;
    count = count + 1;
  } else if (sqbox3 === 1) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);
    sqbox3 = sqbox3 + 1;
    occ3 = color;
  } else if (sqbox3 === 2) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);

    let newElement3 = document.createElement("div");
    newElement3.classList.add(`${color}circle`);
    newElement3.classList.add("circle3");
    clicked.appendChild(newElement3);
    sqbox3 = sqbox3 + 1;
    occ3 = color;
  } else if (sqbox3 === 3) {
    clicked.innerHTML = "";
    sqbox3 = 0;
    occ3 = "";
    handleBox2();
    handleBox6();
  }
}

function handleBox4() {
  let clicked = document.getElementById("box4");
  clicked.innerHTML = "";

  if (sqbox4 === 0) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    clicked.appendChild(newElement);
    sqbox4 = sqbox4 + 1;
    occ4 = color;
    count = count + 1;
  } else if (sqbox4 === 1) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);
    sqbox4 = sqbox4 + 1;
    occ4 = color;
  } else if (sqbox4 === 2) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);

    let newElement3 = document.createElement("div");
    newElement3.classList.add(`${color}circle`);
    newElement3.classList.add("circle3");
    clicked.appendChild(newElement3);
    sqbox4 = sqbox4 + 1;
    occ4 = color;
  } else if (sqbox4 === 3) {
    clicked.innerHTML = "";
    sqbox4 = 0;
    occ4 = "";
    handleBox1();
    handleBox5();
    handleBox7();
  }
}

function handleBox5() {
  let clicked = document.getElementById("box5");
  clicked.innerHTML = "";

  if (sqbox5 === 0) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    clicked.appendChild(newElement);
    sqbox5 = sqbox5 + 1;
    occ5 = color;
    count = count + 1;
  } else if (sqbox5 === 1) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);
    sqbox5 = sqbox5 + 1;
    occ5 = color;
  } else if (sqbox5 === 2) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);

    let newElement3 = document.createElement("div");
    newElement3.classList.add(`${color}circle`);
    newElement3.classList.add("circle3");
    clicked.appendChild(newElement3);
    sqbox5 = sqbox5 + 1;
    occ5 = color;
    count = count + 1;
  } else if (sqbox5 === 3) {
    clicked.innerHTML = "";
    sqbox5 = 0;
    occ5 = "";
    handleBox2();
    handleBox4();
    handleBox6();
    handleBox8();
  }
}

function handleBox6() {
  let clicked = document.getElementById("box6");
  clicked.innerHTML = "";

  if (sqbox6 === 0) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    clicked.appendChild(newElement);
    sqbox6 = sqbox6 + 1;
    occ6 = color;
    count = count + 1;
  } else if (sqbox6 === 1) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);
    sqbox6 = sqbox6 + 1;
    occ6 = color;
  } else if (sqbox6 === 2) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);

    let newElement3 = document.createElement("div");
    newElement3.classList.add(`${color}circle`);
    newElement3.classList.add("circle3");
    clicked.appendChild(newElement3);
    sqbox6 = sqbox6 + 1;
    occ6 = color;
  } else if (sqbox6 === 3) {
    clicked.innerHTML = "";
    sqbox6 = 0;
    occ6 = "";
    handleBox3();
    handleBox5();
    handleBox9();
  }
}

function handleBox7() {
  let clicked = document.getElementById("box7");
  clicked.innerHTML = "";

  if (sqbox7 === 0) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    clicked.appendChild(newElement);
    sqbox7 = sqbox7 + 1;
    occ7 = color;
    count = count + 1;
  } else if (sqbox7 === 1) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);
    sqbox7 = sqbox7 + 1;
    occ7 = color;
  } else if (sqbox7 === 2) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);

    let newElement3 = document.createElement("div");
    newElement3.classList.add(`${color}circle`);
    newElement3.classList.add("circle3");
    clicked.appendChild(newElement3);
    sqbox7 = sqbox7 + 1;
    occ7 = color;
  } else if (sqbox7 === 3) {
    clicked.innerHTML = "";
    sqbox7 = 0;
    occ7 = "";
    handleBox4();
    handleBox8();
  }
}

function handleBox8() {
  let clicked = document.getElementById("box8");
  clicked.innerHTML = "";

  if (sqbox8 === 0) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    clicked.appendChild(newElement);
    sqbox8 = sqbox8 + 1;
    occ8 = color;
    count = count + 1;
  } else if (sqbox8 === 1) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);
    sqbox8 = sqbox8 + 1;
    occ8 = color;
  } else if (sqbox8 === 2) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);

    let newElement3 = document.createElement("div");
    newElement3.classList.add(`${color}circle`);
    newElement3.classList.add("circle3");
    clicked.appendChild(newElement3);
    sqbox8 = sqbox8 + 1;
    occ8 = color;
  } else if (sqbox8 === 3) {
    clicked.innerHTML = "";
    sqbox8 = 0;
    occ8 = "";
    handleBox7();
    handleBox5();
    handleBox9();
  }
}

function handleBox9() {
  let clicked = document.getElementById("box9");
  clicked.innerHTML = "";

  if (sqbox9 === 0) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    clicked.appendChild(newElement);
    sqbox9 = sqbox9 + 1;
    occ9 = color;
    count = count + 1;
  } else if (sqbox9 === 1) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);
    sqbox9 = sqbox9 + 1;
    occ9 = color;
  } else if (sqbox9 === 2) {
    let newElement = document.createElement("div");
    newElement.classList.add(`${color}circle`);
    newElement.classList.add("circle1");
    clicked.appendChild(newElement);

    let newElement2 = document.createElement("div");
    newElement2.classList.add(`${color}circle`);
    newElement2.classList.add("circle2");
    clicked.appendChild(newElement2);

    let newElement3 = document.createElement("div");
    newElement3.classList.add(`${color}circle`);
    newElement3.classList.add("circle3");
    clicked.appendChild(newElement3);
    sqbox9 = sqbox9 + 1;
    occ9 = color;
  } else if (sqbox9 === 3) {
    clicked.innerHTML = "";
    sqbox9 = 0;
    occ9 = "";
    handleBox6();
    handleBox8();
  }
}

function checkWinner() {
  if (
    occ1 != "red" &&
    occ2 != "red" &&
    occ3 != "red" &&
    occ4 != "red" &&
    occ5 != "red" &&
    occ6 != "red" &&
    occ7 != "red" &&
    occ8 != "red" &&
    occ9 != "red"
  ) {
    winner = "blue";
  } else if (
    occ1 != "blue" &&
    occ2 != "blue" &&
    occ3 != "blue" &&
    occ4 != "blue" &&
    occ5 != "blue" &&
    occ6 != "blue" &&
    occ7 != "blue" &&
    occ8 != "blue" &&
    occ9 != "blue"
  ) {
    winner = "red";
  } else {
    winner = "";
  }
}

function changeTurn() {
  if (winner === "") {
    const t = document.getElementById("turn");
    t.classList.remove(`${turn}`);
    if (turn === "red") {
      turn = "blue";
    } else if (turn === "blue") {
      turn = "red";
    }

    t.innerHTML = `${turn}`;
    t.classList.add(`${turn}`);
    color = turn;

    chain = document.getElementById("chain");
    reaction = document.getElementById("reaction");
    if (chain.classList.contains("yellow")) {
      chain.classList.remove("yellow");
      chain.classList.add("green");
    } else if (chain.classList.contains("green")) {
      chain.classList.remove("green");
      chain.classList.add("yellow");
    }
    if (reaction.classList.contains("yellow")) {
      reaction.classList.remove("yellow");
      reaction.classList.add("green");
    } else if (reaction.classList.contains("green")) {
      reaction.classList.remove("green");
      reaction.classList.add("yellow");
    }

    if (count > 2) {
      checkWinner();
    }

    const w = document.getElementById("winner");
    w.innerHTML = `${winner}`;
    w.classList.add(`${winner}`);
  }
}

function handleRestart() {
  location.reload(true);
}

const resbutton = document.getElementById("restart");
resbutton.onclick = handleRestart;

const boxes = document.getElementById("boxes");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
boxes.onclick = changeTurn;

function hClick1() {
  if (occ1 === "" || occ1 === turn) {
    if (winner === "") {
      handleBox1();
    }
  }
  if (occ1 !== turn) {
    changeTurn();
  }
}
function hClick2() {
  if (occ2 === "" || occ2 === turn) {
    if (winner === "") {
      handleBox2();
    }
  }
  if (occ2 !== turn) {
    changeTurn();
  }
}
function hClick3() {
  if (occ3 === "" || occ3 === turn) {
    if (winner === "") {
      handleBox3();
    }
  }
  if (occ3 !== turn) {
    changeTurn();
  }
}
function hClick4() {
  if (occ4 === "" || occ4 === turn) {
    if (winner === "") {
      handleBox4();
    }
  }
  if (occ4 !== turn) {
    changeTurn();
  }
}
function hClick5() {
  if (occ5 === "" || occ5 === turn) {
    if (winner === "") {
      handleBox5();
    }
  }
  if (occ5 !== turn) {
    changeTurn();
  }
}
function hClick6() {
  if (occ6 === "" || occ6 === turn) {
    if (winner === "") {
      handleBox6();
    }
  }
  if (occ6 !== turn) {
    changeTurn();
  }
}
function hClick7() {
  if (occ7 === "" || occ7 === turn) {
    if (winner === "") {
      handleBox7();
    }
  }
  if (occ7 !== turn) {
    changeTurn();
  }
}
function hClick8() {
  if (occ8 === "" || occ8 === turn) {
    if (winner === "") {
      handleBox8();
    }
  }
  if (occ8 !== turn) {
    changeTurn();
  }
}
function hClick9() {
  if (occ9 === "" || occ9 === turn) {
    if (winner === "") {
      handleBox9();
    }
  }
  if (occ9 !== turn) {
    changeTurn();
  }
}

box1.onclick = hClick1;
box2.onclick = hClick2;
box3.onclick = hClick3;
box4.onclick = hClick4;
box5.onclick = hClick5;
box6.onclick = hClick6;
box7.onclick = hClick7;
box8.onclick = hClick8;
box9.onclick = hClick9;
