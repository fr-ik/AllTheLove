document.querySelector(".btn").addEventListener("click", ()=>{
    document.querySelector(".table").
    classList.toggle("change");
    
})

document.querySelector(".letter").addEventListener("click", ()=>{
     document.querySelector(".letter").
    classList.toggle("change");
    
})

document.querySelector(".scroll").addEventListener("click", ()=>{
   
  document.querySelector(".letter1").
    classList.toggle("change");
    document.querySelector(".letter").
    classList.toggle("change1");
})
document.querySelector(".scroll1").addEventListener("click", ()=>{
   
  document.querySelector(".letter2").
    classList.toggle("change");
    document.querySelector(".letter1").
    classList.toggle("change");
})

document.querySelector(".btn1").addEventListener("click", ()=>{
   
  document.querySelector(".text").
    classList.toggle("change");
    
})

document.querySelector(".letter2").addEventListener("click", ()=>{
     document.querySelector(".letter2").
    classList.toggle("change1");
    
})