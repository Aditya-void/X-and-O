let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msgcontainer = document.querySelector(".container-hide");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const restGame = () => {
turn0 =true;
enabledboxes();
}


boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        if (turn0){
            box.innerText ="0";
            turn0=false;
            box.s
        }
        else{
            box.innerText ="x";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    })
})

const disabledboxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enabledboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const checkWinner = () =>{
    for(pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val=== pos2val && pos2val ===pos3val){
                console.log("Winner is ",pos1val);
                disabledboxes();
            alert(pos1val);
            }
        }
    }
}



newbtn.addEventListener("click",restGame);

reset.addEventListener("click",restGame);