let boxes =document.querySelectorAll(".box")
let rebut=document.querySelector(".reset")
let newbtn=document.querySelector("#new-game")
let msgcontainer=document.querySelector(".message")
let msg=document.querySelector("#message")


let turnO = true;
let arr=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O"
            turnO=false
        }
        else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true
        winner()

    })
})

const showwinner=(winner)=>{
    msg.innerText=`congrulation,winner is ${winner}`
    msgcontainer.classList.remove("hide")
    for(i of boxes){
        i.disabled=true;
    }
    
}

const winner =()=>{
    for(pattern of arr){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText
        if(pos1 !="" && pos2 !=""&& pos3 !="" ){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner")
                showwinner(pos1)
            }
        }
    }
}

const resetgame=()=>{
    turnO=true
    for(i of boxes){
        i.disabled=true;
        i.innerText=""
        msg.classList.add("hide");
    }
    
}

newbtn.addEventListener("click",resetgame);
rebut.addEventListener("click",resetgame);