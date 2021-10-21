
let ing=0; 

let form = document.querySelector("form");
form.addEventListener("submit",(e)=> {
    e.preventDefault();
    ing = Number(document.getElementById('dinero').value);
    let de = Number(document.getElementById("de").value);
    let para = Number(document.getElementById("a").value);

let res=0;


let dol = 0;
let eur = 0;
let cop = 0;
let pm=0;
let ps=0;


console.log(typeof(ing), de, para);

/*Peso dolar*/

if (de===1 && para===2) {

    pm = 20.26;
    res = ing * pm;
    
  
    console.log(res);
} else if( de === 1 && para === 3){
    cop = 3785.21;
    res = ing * cop;
    console.log(res);

} else if (de === 1 && para === 4){
    eur = 0.86;
    res = ing * eur;
    console.log(res);
    

} else if (de === 1 && para === 5){
    ps = 0.72;
    res = ing * ps;
    console.log(res);
/*Peso mexicano*/

} else if (de===2 && para === 1){

    pm = 0.049;
    res = ing * pm;
    console.log(res,ing);

}
else if (de===2 && para === 3){

    cop = 186.74;
    res = ing * cop;
    console.log(res,ing);

}
else if (de===2 && para === 4){

    eur = 0.049;
    res = ing * eur;
    console.log(res,ing);

}
else if (de===2 && para === 5){

    ps = 0.036;
    res = ing * ps;
    console.log(res,ing);

}

/*Peso colombiano*/

else if (de===3 && para === 1){ 

    dol = 0.00027;
    res = ing * dol;
    console.log(res,ing);

}
else if (de===3 && para === 2){

    pm=0.0054;
    res = ing * pm;
    console.log(res,ing);

}
else if (de===3 && para === 4){

    eur = 0.00023;
    res = ing * eur;
    console.log(res);

}
else if (de===3 && para === 5){

    ps = 0.00019;
    res = ing * ps;
    console.log(res);

}
/*Peso Euro*/
else if (de===4 && para === 1){

    dol = 1.16;
    res = ing * dol;
    console.log(res);

}
else if (de===4 && para === 2){

    pm = 23.58;
    res = ing * pm ;
    console.log(res);

}
else if (de===4 && para === 3){

    cop = 4387.44;
    res = ing * cop;
    console.log(res);

}
else if (de===4 && para === 5){

    ps = 0.84;
    res = ing * ps;
    console.log(res);

}
/*Peso Libra Esterlina*/
else if (de===5 && para === 1){

    dol = 1.38;
    res = ing * dol;
    console.log(res);

}
else if (de===5 && para === 2){

    pm = 28;
    res = ing * pm;
    console.log(res);

}
else if (de===5 && para === 3){

    cop = 5215.22;
    res = ing * cop;
    console.log(res);

}
else if (de===5 && para === 4){

    eur = 1.19;
    res = ing * eur;
    console.log(res);

}
else{
    console.log("misma moneda");
    alert("misma moneda")

}

document.getElementById("res").value=res.toFixed(2);
})



