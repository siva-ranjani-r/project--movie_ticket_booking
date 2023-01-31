var ar=[];
var container = document.getElementById("seat-1");
var reservedSeatsCount = document.getElementById("count");
var amount = document.getElementById("total");
var booked_seat=document.getElementById("Booked")
var selected = false;
var ticketAmount = 650;
var count=0;
var name1="S1 ";

function fun()
{
  var str="";
  for(i=0;i<ar.length;i++)
  {
    str+=ar[i]
  }
  return str;
}


container.addEventListener("click", function() {
  if (!selected) {
    this.style.backgroundColor = "#31d7a9";
    selected = true;
    count ++;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML =count * ticketAmount;
    ar.push(name1);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    selected = false;
    count --;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML =count * ticketAmount;
    z=ar.indexOf(name1)// find index value
    ar.splice(z,1)//index and remove
    booked_seat.innerHTML=fun()
  }
});


//seat2
var seat2=false;
var name2="S2 "
document.getElementById("seat-2").addEventListener("click", function() {
  if (!seat2) {
    this.style.backgroundColor = "#31d7a9";
    seat2 = true;
    count ++;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML =count * ticketAmount;
    ar.push(name2);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat2 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =count * ticketAmount;
    z=ar.indexOf(name2)// find index value
    ar.splice(z,1)//index and remove
    booked_seat.innerHTML=fun()
  }
});


//seat3
var seat3=false;
var name3="S3 "
document.getElementById("seat-3").addEventListener("click", function() {
  if (!seat3) {
    this.style.backgroundColor = "#31d7a9";
    seat3 = true;
    count ++;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML =count * ticketAmount;
    ar.push(name3);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat3 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name3)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat4
var seat4=false;
var name4="S4 "
document.getElementById("seat-4").addEventListener("click", function() {
  if (!seat4) {
    this.style.backgroundColor = "#31d7a9";
    seat4 = true;
    count ++;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name4);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat4 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name4)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat5
var seat5=false;
var name5="S5 "
document.getElementById("seat-5").addEventListener("click", function() {
  if (!seat5) {
    this.style.backgroundColor = "#31d7a9";
    seat5 = true;
    count ++;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name5);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat5 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name5)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat6
var seat6=false;
var name6="S6 "
document.getElementById("seat-6").addEventListener("click", function() {
  if (!seat6) {
    this.style.backgroundColor = "#31d7a9";
    seat6 = true;
    count ++;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name6);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat6 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name6)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat7
var seat7=false;
var name7="S7 "
document.getElementById("seat-7").addEventListener("click", function() {
  if (!seat7) {
    this.style.backgroundColor = "#31d7a9";
    seat7 = true;
    count ++;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML =  count * ticketAmount;
    ar.push(name7);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat7 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name7)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat8
var seat8=false;
var name8='S8 '
document.getElementById("seat-8").addEventListener("click", function() {
  if (!seat8) {
    this.style.backgroundColor = "#31d7a9";
    seat8 = true;
    count ++;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name8);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat8 = false;
    count --;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name8)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat9
var seat9=false;
var name9='S9 '
document.getElementById("seat-9").addEventListener("click", function() {
  if (!seat9) {
    this.style.backgroundColor = "#31d7a9";
    seat9 = true;
    count ++;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name9);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat9 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name9)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat10
var seat10=false;
var name10='S10 '
document.getElementById("seat-10").addEventListener("click", function() {
  if (!seat10) {
    this.style.backgroundColor = "#31d7a9";
    seat10 = true;
    count ++;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name10);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat10 = false;
    count --;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name10)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});


//seat11
var seat11=false;
var name11='S11 '
document.getElementById("seat-11").addEventListener("click", function() {
  if (!seat11) {
    this.style.backgroundColor = "#31d7a9";
    seat11 = true;
    count ++;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name11);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat11 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name11)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});


//seat12
var seat12=false;
var name12='S12 '
document.getElementById("seat-12").addEventListener("click", function() {
  if (!seat12) {
    this.style.backgroundColor = "#31d7a9";
    seat12 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name12);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat12 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name12)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});


//seat13
var seat13=false;
var name13='S13 '
document.getElementById("seat-13").addEventListener("click", function() {
  if (!seat13) {
    this.style.backgroundColor = "#31d7a9";
    seat13 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name13);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat13 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name13)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});


//seat14
var seat14=false;
var name14='S14 '
document.getElementById("seat-14").addEventListener("click", function() {
  if (!seat14) {
    this.style.backgroundColor = "#31d7a9";
    seat14 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name14);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat14 = false;
    count --;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name14)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat15
var seat15=false;
var name15='S15 '
document.getElementById("seat-15").addEventListener("click", function() {
  if (!seat15) {
    this.style.backgroundColor = "#31d7a9";
    seat15 = true;
    count ++;
    reservedSeatsCount.innerHTML =count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name15);
    booked_seat.innerHTML=fun()

  } else {
    this.style.backgroundColor = "#01163e";
    seat15 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name15)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat16
var seat16=false;
var name16='S16 '
document.getElementById("seat-16").addEventListener("click", function() {
  if (!seat16) {
    this.style.backgroundColor = "#31d7a9";
    seat16 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    ar.push(name16);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat16 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name16)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});



//seat17
var seat17=false;
var name17='S17 '
document.getElementById("seat-17").addEventListener("click", function() {
  if (!seat17) {
    this.style.backgroundColor = "#31d7a9";
    seat17 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    ar.push(name17);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat17 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name17)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat18
var seat18=false;
var name18='S18 '
document.getElementById("seat-18").addEventListener("click", function() {
  if (!seat18) {
    this.style.backgroundColor = "#31d7a9";
    seat18 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name18);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat18 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name18)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});


//seat19
var seat19=false;
var name19='S19 '
document.getElementById("seat-19").addEventListener("click", function() {
  if (!seat19) {
    this.style.backgroundColor = "#31d7a9";
    seat19 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name19);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat19 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name19)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});


//seat20
var seat20=false;
var name20='S20 '
document.getElementById("seat-20").addEventListener("click", function() {
  if (!seat20) {
    this.style.backgroundColor = "#31d7a9";
    seat20 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    ar.push(name20);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat20 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name20)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat21
var seat21=false;
var name21='S21 '
document.getElementById("seat-21").addEventListener("click", function() {
  if (!seat21) {
    this.style.backgroundColor = "#31d7a9";
    seat21 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name21);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat21 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name21)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat22
var seat22=false;
var name22='S22 '
document.getElementById("seat-22").addEventListener("click", function() {
  if (!seat22) {
    this.style.backgroundColor = "#31d7a9";
    seat22 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name22);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat22 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name22)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat23
var seat23=false;
var name23='S23 '
document.getElementById("seat-23").addEventListener("click", function() {
  if (!seat23) {
    this.style.backgroundColor = "#31d7a9";
    seat23 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name23);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat23 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name23)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat24
var seat24=false;
var name24='S24 '
document.getElementById("seat-24").addEventListener("click", function() {
  if (!seat24) {
    this.style.backgroundColor = "#31d7a9";
    seat24 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    ar.push(name24);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat24 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name24)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat25
var seat25=false;
var name25='S25 '
document.getElementById("seat-25").addEventListener("click", function() {
  if (!seat25) {
    this.style.backgroundColor = "#31d7a9";
    seat25 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name25);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat25 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name25)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat26
var seat26=false;
var name26='S26 '
document.getElementById("seat-26").addEventListener("click", function() {
  if (!seat26) {
    this.style.backgroundColor = "#31d7a9";
    seat26 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name26);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat26= false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name26)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat27
var seat27=false;
var name27='S27 '
document.getElementById("seat-27").addEventListener("click", function() {
  if (!seat27) {
    this.style.backgroundColor = "#31d7a9";
    seat27 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name27);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat27 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name27)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});


//seat28
var seat28=false;
var name28='S28 '
document.getElementById("seat-28").addEventListener("click", function() {
  if (!seat28) {
    this.style.backgroundColor = "#31d7a9";
    seat28 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name28);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat28 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name28)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});


//seat29
var seat29=false;
var name29='S29 '
document.getElementById("seat-29").addEventListener("click", function() {
  if (!seat29) {
    this.style.backgroundColor = "#31d7a9";
    seat29 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name29);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat29 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name29)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat30
var seat30=false;
var name30='S30 '
document.getElementById("seat-30").addEventListener("click", function() {
  if (!seat30) {
    this.style.backgroundColor = "#31d7a9";
    seat30 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name30);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat30 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name30)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat31
var seat31=false;
var name31='S31 '
document.getElementById("seat-31").addEventListener("click", function() {
  if (!seat31) {
    this.style.backgroundColor = "#31d7a9";
    seat31 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name31);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat31 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name31)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat32
var seat32=false;
var name32='S32 '
document.getElementById("seat-32").addEventListener("click", function() {
  if (!seat32) {
    this.style.backgroundColor = "#31d7a9";
    seat32 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name32);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat32 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name32)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat33
var seat33=false;
var name33='S33 '
document.getElementById("seat-33").addEventListener("click", function() {
  if (!seat33) {
    this.style.backgroundColor = "#31d7a9";
    seat33 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name33);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat33 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name33)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat34
var seat34=false;
var name34='S34 '
document.getElementById("seat-34").addEventListener("click", function() {
  if (!seat34) {
    this.style.backgroundColor = "#31d7a9";
    seat34 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name34);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat34 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name34)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat35
var seat35=false;
var name35='S35 '
document.getElementById("seat-35").addEventListener("click", function() {
  if (!seat35) {
    this.style.backgroundColor = "#31d7a9";
    seat35 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name35);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat35 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name35)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});


//seat36
var seat36=false;
var name36='S36 '
document.getElementById("seat-36").addEventListener("click", function() {
  if (!seat36) {
    this.style.backgroundColor = "#31d7a9";
    seat36 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name36);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat36 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name36)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat37
var seat37=false;
var name37='S37 '
document.getElementById("seat-37").addEventListener("click", function() {
  if (!seat37) {
    this.style.backgroundColor = "#31d7a9";
    seat37 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name37);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat37 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name37)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat38
var seat38=false;
var name38='S38 '
document.getElementById("seat-38").addEventListener("click", function() {
  if (!seat38) {
    this.style.backgroundColor = "#31d7a9";
    seat38 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    ar.push(name38);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat38 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name38)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat39
var seat39=false;
var name39='S39 '
document.getElementById("seat-39").addEventListener("click", function() {
  if (!seat39) {
    this.style.backgroundColor = "#31d7a9";
    seat39 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name39);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat39 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name39)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat40
var seat40=false;
var name40='S40 '
document.getElementById("seat-40").addEventListener("click", function() {
  if (!seat40) {
    this.style.backgroundColor = "#31d7a9";
    seat40 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name40);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat40 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name40)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat41
var seat41=false;
var name41='S41 '
document.getElementById("seat-41").addEventListener("click", function() {
  if (!seat41) {
    this.style.backgroundColor = "#31d7a9";
    seat41 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name41);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat41 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name41)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat42
var seat42=false;
var name42='S42 '
document.getElementById("seat-42").addEventListener("click", function() {
  if (!seat42) {
    this.style.backgroundColor = "#31d7a9";
    seat42 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name42);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat42 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name42)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat43
var seat43=false;
var name43='S43 '
document.getElementById("seat-43").addEventListener("click", function() {
  if (!seat43) {
    this.style.backgroundColor = "#31d7a9";
    seat43 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name43);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat43 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name43)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat44
var seat44=false;
var name44='S44 '
document.getElementById("seat-44").addEventListener("click", function() {
  if (!seat44) {
    this.style.backgroundColor = "#31d7a9";
    seat44 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name44);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat44 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML =  count * ticketAmount;
    z=ar.indexOf(name44)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});


//seat45
var seat45=false;
var name45='S45 '
document.getElementById("seat-45").addEventListener("click", function() {
  if (!seat45) {
    this.style.backgroundColor = "#31d7a9";
    seat45 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name45);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat45 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name45)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});

//seat46
var seat46=false;
var name46='S46 '
document.getElementById("seat-46").addEventListener("click", function() {
  if (!seat46) {
    this.style.backgroundColor = "#31d7a9";
    seat46 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name46);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat46 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name46)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});


//seat47
var seat47=false;
var name47='S47 '
document.getElementById("seat-47").addEventListener("click", function() {
  if (!seat47) {
    this.style.backgroundColor = "#31d7a9";
    seat47 = true;
    count ++;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    ar.push(name47);
    booked_seat.innerHTML=fun()
  } else {
    this.style.backgroundColor = "#01163e";
    seat47 = false;
    count --;
    reservedSeatsCount.innerHTML = count;
    amount.innerHTML = count * ticketAmount;
    z=ar.indexOf(name47)
    ar.splice(z,1)
    booked_seat.innerHTML=fun()
  }
});



