var counter =document.getElementById('counter')
console.log("10");
counter.innerText="10"
    setTimeout(function timer(){
        console.log("9");
        counter.innerText="9"
    },1000);
    setTimeout(function timer(){
        console.log("8");
        counter.innerText="8"
    },2000);
    setTimeout(function timer(){
        console.log("7");
        counter.innerText="7"
    },3000);
    setTimeout(function timer(){
        console.log("6");
        counter.innerText="6"
    },4000);
    setTimeout(function timer(){
        console.log("5");
        counter.innerText="5"
    },5000);
    setTimeout(function timer(){
        console.log("4");
        counter.innerText="4"
    },6000);
    setTimeout(function timer(){
        console.log("3");
        counter.innerText="3"
    },7000);
    setTimeout(function timer(){
        console.log("2");
        counter.innerText="2"
    },8000);
    setTimeout(function timer(){
        console.log("1");
        counter.innerText="1"
    },9000);
     setTimeout(()=>{
     console.log("Happy Independence Day")
   counter.innerText="Happy Independence Day"
    },10000)

        
    