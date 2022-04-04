window.onload=()=>{
    var a = Math.round(Math.random()*100);
    var b = document.getElementById("inp");
    var ok = document.getElementById("submit");
    var count = 0;
    console.log(a);
    ok.onmouseup=()=>{
        count++;
        if( a == b.value ){
            alert(`You guess the number from ${count} steps`);
        }
        else if(a > b.value){
            alert(`Your number is less then `);
            b.value='';
        }
        else{
            alert(`Your number is greater then `);
            b.value='';
        }
    }
}