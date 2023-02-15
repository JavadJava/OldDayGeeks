let cross = document.querySelector("#cross")
let crossLines = document.querySelectorAll(".cross-line-1")
let switchOne = true
function crossChanges(){
    if(switchOne){
        crossLines[1].style.display = "none"
        crossLines[0].style.transform = "rotate(45deg)"
        crossLines[2].style.transform = "rotate(-45deg)"
        crossLines[0].style.width = "50px"
        crossLines[0].style.top = "6.5px"
        crossLines[2].style.top = "-5px"
        switchOne = false
    }else{
        crossLines[0].style.transform = "rotate(0deg)"
        crossLines[2].style.transform = "rotate(0deg)"
        crossLines[0].style.top = "0"
        crossLines[2].style.top = "0"
        switchOne = true
        crossLines[1].style.display = "block"
    }
}
function menuMove(){
    if(!switchOne){
        $("nav").css("display","inline-block")
    }else{
        $("nav").css("display","none")
    }
}
function menuCrossClicked (){
    crossChanges();
    menuMove();

}
cross.addEventListener("click",menuCrossClicked);