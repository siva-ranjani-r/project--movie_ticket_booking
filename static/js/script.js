var Selected_Seats=0,price=0;
var squareRef = document.getElementsByClassName("row");
for(var i = 0; i < squareRef.length; i++) {
    squareRef[i].addEventListener("click", changeColor);
}

function changeColor(event) {
    event.target.style.color = "red";
    location.replace("")
    Selected_Seats+=1;
    price+=850
    x=document.getElementById("count")
    x.innerHTML=Selected_Seats
    y=document.getElementById("total")
    y.innerHTML=price
}