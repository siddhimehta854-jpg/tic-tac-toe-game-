let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newBtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turn0) {
                box.innerText = "X";
                turn0 = false;
            } else {
                box.innerText = "O";
                turn0 = true;
            }
        }
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText= "";
    }
};

const showWinner = (winner) => {
    msg.innerText = 'congratulations ' + winner + ' wins!';
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
    }
}
const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        enableBoxes();
        msgcontainer.classList.add("hide");

    });
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
