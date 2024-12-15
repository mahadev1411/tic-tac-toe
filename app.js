let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let turnO = true;
let count = 0;

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            count++;
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }
            box.disabled = true;
            check();
            if (count === 9) {
                setTimeout(() => {
                    alert(`Match is drawn!`);
                    reset();
                }, 1000);
            }
        }
    });
});

const check = () => {
    for (let pattern of win) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner", val1);
                boxes.forEach((box) => (box.disabled = true));
                setTimeout(() => {
                    alert(`${val1} is the winner!`);
                    reset();
                }, 1000);

                return;
            }
        }
    }
};

const reset = () => {
    turnO = true;
    count = 0;
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};
resetBtn.addEventListener("click", reset);
