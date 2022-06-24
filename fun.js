
document.getElementById("b1").onclick = function(){
    let num=document.getElementById("in1").value;
    // num=parseInt(num);
    
    let s=(num>>>0).toString(2);
    
    document.getElementById("out1").innerHTML=s;
console.log(s);

}
